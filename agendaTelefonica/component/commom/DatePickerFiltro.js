import React, {useState, useEffect} from 'react';
import {View, TouchableHighlight, Text, StyleSheet} from 'react-native';
import {px, pxW, pxH, widthScreen} from '../../utils/functions.util';
import {LAYOUT} from '../../constants/app.constant';
import DatePicker from 'react-native-datepicker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSortDown as faSortDownSolid} from '@fortawesome/free-solid-svg-icons';

const CampoSelecao = props => {
  const {date, onChange, updateState, minData, maxData} = props;
  const [dataPlaceHolder, setDataPlaceHolder] = useState('');
  useEffect(() => {
    // Ao montar o componente
    return () => {
      // Ao desmontar o componente
      setDataPlaceHolder('');
    };
  }, []);

  return (
    <DatePicker
      //   style={styles.datePeriodo}
      date={dataPlaceHolder}
      mode="date"
      placeholder="dd/mm/aaaa"
      confirmBtnText="Confirmar"
      cancelBtnText="Cancelar"
      format="DD/MM/YYYY"
      minDate={minData}
      maxDate={maxData}
      customStyles={{
        dateInput: {
          borderRadius: 5,
          borderWidth: 0.3,
          borderColor: LAYOUT.COLORS.primary,
          alignItems: 'flex-start',
          paddingLeft: px(10),
        },
        placeholderText: {
          width: '100%',
          fontSize: 14,
          color: LAYOUT.COLORS.text,
          textAlign: 'left',
          alignItems: 'flex-start',
        },
        dateText: {
          color: LAYOUT.COLORS.text,
          alignItems: 'flex-start',
        },
      }}
      iconComponent={
        <FontAwesomeIcon
          icon={faSortDownSolid}
          size={18}
          style={styles.iconDatePicker}
        />
      }
      onDateChange={date => {
        onChange(updateState, date);
        setDataPlaceHolder(date);
      }}
    />
  );
};

const styles = StyleSheet.create({
  flatlist: {},
  iconDatePicker: {
    color: LAYOUT.COLORS.text,
    position: 'absolute',
    right: 4,
    top: 8,
    marginLeft: 0,
  },
});

export default CampoSelecao;
