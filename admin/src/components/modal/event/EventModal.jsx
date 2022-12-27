import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { FIELDS } from "../../../constants/categoryFormField";
import { Button } from "@mui/material";
import { NOOP, FileRead } from "../../../libs/utils";
import "./EventModal.less";

const EventModal = (props) => {
  const { active, onClose, onSave, editEvent } = props;

  const formik = useFormik({
    initialValues: {
      [FIELDS.NAME]: editEvent ? editEvent.name : '',
      [FIELDS.IMAGE]: editEvent ? editEvent.image_url : '',
      [FIELDS.DESCRIPTION]: editEvent ? editEvent.description : '',
      [FIELDS.DATE]: editEvent ? editEvent.date : '',
      [FIELDS.STATUS]: editEvent ? editEvent.status : '',
      [FIELDS.REPEAT]: editEvent ? editEvent.repeat : ''
    },

    onSubmit: async (values) => {
      const getBase64Hash = await FileRead(values.image);
      const myDate = values.date;
      const date = new Date(myDate);
      const timestamp = String(date.getTime());
      const { name, description, status, repeat } = values;
      onSave(name, getBase64Hash, description, timestamp, status, repeat);
      onClose();

      FileRead(values.image);
    },
  });

  const { handleSubmit, handleChange, setFieldValue, values } = formik;

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => onClose()}>
      <div
        style={{ backgroundColor: "white" }}
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit} className="EventForm">
          <input
            className="eventField"
            name="name"
            type="text"
            placeholder="Event name"
            value={values[FIELDS.NAME]}
            onChange={handleChange}
          />
          <input
            name="image_url"
            type="file"
            onChange={(e) => { setFieldValue("image", e.currentTarget.files[0]); }}
          />
          <input
            className="eventField"
            name="description"
            type="text"
            placeholder="Event description"
            value={values[FIELDS.DESCRIPTION]}
            onChange={handleChange}
          />
          <input
            className="eventField"
            name="date"
            type="date"
            value={values[FIELDS.DATE]}
            onChange={handleChange}
          />
          <select
            name="status"
            value={values[FIELDS.STATUS]}
            onChange={handleChange}
          >
            <option>Please choose an option</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <select
            name="repeat"
            value={values[FIELDS.REPEAT]}
            onChange={handleChange}
          >
            <option>Please choose an option</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined" color="error" onClick={() => onClose()}>
              Cancel
            </Button>
            <Button variant="outlined" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

EventModal.propTypes = {
  active: PropTypes.bool,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
};

EventModal.defaultProps = {
  active: false,
  onClose: NOOP,
  onSave: NOOP,
};

export default EventModal;
