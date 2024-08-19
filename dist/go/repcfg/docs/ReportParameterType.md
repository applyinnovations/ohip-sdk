# ReportParameterType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Individual report parameter details. | [optional] 
**Label** | Pointer to **string** | Display label for report parameter. | [optional] 
**DataType** | Pointer to [**ParamDataType**](ParamDataType.md) |  | [optional] 
**Value** | Pointer to **string** | Initial report parameter value. | [optional] 
**CalculatedDateValue** | Pointer to **string** | Date value from offset. | [optional] 
**DateFormatMask** | Pointer to **string** | Format mask for date report parameters. | [optional] 
**OrderBy** | Pointer to **int32** | Report parameter display order. | [optional] 
**DateOffset** | Pointer to **int32** | Number of days to offset from current business date for date report parameter. | [optional] 
**FormatMask** | Pointer to [**ParamFormatMaskType**](ParamFormatMaskType.md) |  | [optional] 
**BuildStringForDateOffset** | Pointer to **string** |  | [optional] 
**LovParam** | Pointer to [**LovParamDetailsType**](LovParamDetailsType.md) |  | [optional] 

## Methods

### NewReportParameterType

`func NewReportParameterType() *ReportParameterType`

NewReportParameterType instantiates a new ReportParameterType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReportParameterTypeWithDefaults

`func NewReportParameterTypeWithDefaults() *ReportParameterType`

NewReportParameterTypeWithDefaults instantiates a new ReportParameterType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ReportParameterType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ReportParameterType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ReportParameterType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ReportParameterType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetLabel

`func (o *ReportParameterType) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *ReportParameterType) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *ReportParameterType) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *ReportParameterType) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetDataType

`func (o *ReportParameterType) GetDataType() ParamDataType`

GetDataType returns the DataType field if non-nil, zero value otherwise.

### GetDataTypeOk

`func (o *ReportParameterType) GetDataTypeOk() (*ParamDataType, bool)`

GetDataTypeOk returns a tuple with the DataType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataType

`func (o *ReportParameterType) SetDataType(v ParamDataType)`

SetDataType sets DataType field to given value.

### HasDataType

`func (o *ReportParameterType) HasDataType() bool`

HasDataType returns a boolean if a field has been set.

### GetValue

`func (o *ReportParameterType) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ReportParameterType) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ReportParameterType) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *ReportParameterType) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetCalculatedDateValue

`func (o *ReportParameterType) GetCalculatedDateValue() string`

GetCalculatedDateValue returns the CalculatedDateValue field if non-nil, zero value otherwise.

### GetCalculatedDateValueOk

`func (o *ReportParameterType) GetCalculatedDateValueOk() (*string, bool)`

GetCalculatedDateValueOk returns a tuple with the CalculatedDateValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculatedDateValue

`func (o *ReportParameterType) SetCalculatedDateValue(v string)`

SetCalculatedDateValue sets CalculatedDateValue field to given value.

### HasCalculatedDateValue

`func (o *ReportParameterType) HasCalculatedDateValue() bool`

HasCalculatedDateValue returns a boolean if a field has been set.

### GetDateFormatMask

`func (o *ReportParameterType) GetDateFormatMask() string`

GetDateFormatMask returns the DateFormatMask field if non-nil, zero value otherwise.

### GetDateFormatMaskOk

`func (o *ReportParameterType) GetDateFormatMaskOk() (*string, bool)`

GetDateFormatMaskOk returns a tuple with the DateFormatMask field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateFormatMask

`func (o *ReportParameterType) SetDateFormatMask(v string)`

SetDateFormatMask sets DateFormatMask field to given value.

### HasDateFormatMask

`func (o *ReportParameterType) HasDateFormatMask() bool`

HasDateFormatMask returns a boolean if a field has been set.

### GetOrderBy

`func (o *ReportParameterType) GetOrderBy() int32`

GetOrderBy returns the OrderBy field if non-nil, zero value otherwise.

### GetOrderByOk

`func (o *ReportParameterType) GetOrderByOk() (*int32, bool)`

GetOrderByOk returns a tuple with the OrderBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy

`func (o *ReportParameterType) SetOrderBy(v int32)`

SetOrderBy sets OrderBy field to given value.

### HasOrderBy

`func (o *ReportParameterType) HasOrderBy() bool`

HasOrderBy returns a boolean if a field has been set.

### GetDateOffset

`func (o *ReportParameterType) GetDateOffset() int32`

GetDateOffset returns the DateOffset field if non-nil, zero value otherwise.

### GetDateOffsetOk

`func (o *ReportParameterType) GetDateOffsetOk() (*int32, bool)`

GetDateOffsetOk returns a tuple with the DateOffset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateOffset

`func (o *ReportParameterType) SetDateOffset(v int32)`

SetDateOffset sets DateOffset field to given value.

### HasDateOffset

`func (o *ReportParameterType) HasDateOffset() bool`

HasDateOffset returns a boolean if a field has been set.

### GetFormatMask

`func (o *ReportParameterType) GetFormatMask() ParamFormatMaskType`

GetFormatMask returns the FormatMask field if non-nil, zero value otherwise.

### GetFormatMaskOk

`func (o *ReportParameterType) GetFormatMaskOk() (*ParamFormatMaskType, bool)`

GetFormatMaskOk returns a tuple with the FormatMask field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormatMask

`func (o *ReportParameterType) SetFormatMask(v ParamFormatMaskType)`

SetFormatMask sets FormatMask field to given value.

### HasFormatMask

`func (o *ReportParameterType) HasFormatMask() bool`

HasFormatMask returns a boolean if a field has been set.

### GetBuildStringForDateOffset

`func (o *ReportParameterType) GetBuildStringForDateOffset() string`

GetBuildStringForDateOffset returns the BuildStringForDateOffset field if non-nil, zero value otherwise.

### GetBuildStringForDateOffsetOk

`func (o *ReportParameterType) GetBuildStringForDateOffsetOk() (*string, bool)`

GetBuildStringForDateOffsetOk returns a tuple with the BuildStringForDateOffset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuildStringForDateOffset

`func (o *ReportParameterType) SetBuildStringForDateOffset(v string)`

SetBuildStringForDateOffset sets BuildStringForDateOffset field to given value.

### HasBuildStringForDateOffset

`func (o *ReportParameterType) HasBuildStringForDateOffset() bool`

HasBuildStringForDateOffset returns a boolean if a field has been set.

### GetLovParam

`func (o *ReportParameterType) GetLovParam() LovParamDetailsType`

GetLovParam returns the LovParam field if non-nil, zero value otherwise.

### GetLovParamOk

`func (o *ReportParameterType) GetLovParamOk() (*LovParamDetailsType, bool)`

GetLovParamOk returns a tuple with the LovParam field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLovParam

`func (o *ReportParameterType) SetLovParam(v LovParamDetailsType)`

SetLovParam sets LovParam field to given value.

### HasLovParam

`func (o *ReportParameterType) HasLovParam() bool`

HasLovParam returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


