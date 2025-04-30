# ConfigReportParameterType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Report parameter name. | [optional] 
**Label** | Pointer to **string** | Display label for report parameter. | [optional] 
**DataType** | Pointer to [**ParamDataType**](ParamDataType.md) |  | [optional] 
**Value** | Pointer to **string** | Default report parameter value. | [optional] 
**DateOffset** | Pointer to **string** | Date Ofset could be in the format +x DAYS. | [optional] 
**LovSql** | Pointer to **string** | Query statement for LOV based report parameters. | [optional] 
**Sequence** | Pointer to **int32** | Display sequence of report parameter. | [optional] 

## Methods

### NewConfigReportParameterType

`func NewConfigReportParameterType() *ConfigReportParameterType`

NewConfigReportParameterType instantiates a new ConfigReportParameterType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigReportParameterTypeWithDefaults

`func NewConfigReportParameterTypeWithDefaults() *ConfigReportParameterType`

NewConfigReportParameterTypeWithDefaults instantiates a new ConfigReportParameterType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ConfigReportParameterType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ConfigReportParameterType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ConfigReportParameterType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ConfigReportParameterType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetLabel

`func (o *ConfigReportParameterType) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *ConfigReportParameterType) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *ConfigReportParameterType) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *ConfigReportParameterType) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetDataType

`func (o *ConfigReportParameterType) GetDataType() ParamDataType`

GetDataType returns the DataType field if non-nil, zero value otherwise.

### GetDataTypeOk

`func (o *ConfigReportParameterType) GetDataTypeOk() (*ParamDataType, bool)`

GetDataTypeOk returns a tuple with the DataType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataType

`func (o *ConfigReportParameterType) SetDataType(v ParamDataType)`

SetDataType sets DataType field to given value.

### HasDataType

`func (o *ConfigReportParameterType) HasDataType() bool`

HasDataType returns a boolean if a field has been set.

### GetValue

`func (o *ConfigReportParameterType) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ConfigReportParameterType) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ConfigReportParameterType) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *ConfigReportParameterType) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetDateOffset

`func (o *ConfigReportParameterType) GetDateOffset() string`

GetDateOffset returns the DateOffset field if non-nil, zero value otherwise.

### GetDateOffsetOk

`func (o *ConfigReportParameterType) GetDateOffsetOk() (*string, bool)`

GetDateOffsetOk returns a tuple with the DateOffset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateOffset

`func (o *ConfigReportParameterType) SetDateOffset(v string)`

SetDateOffset sets DateOffset field to given value.

### HasDateOffset

`func (o *ConfigReportParameterType) HasDateOffset() bool`

HasDateOffset returns a boolean if a field has been set.

### GetLovSql

`func (o *ConfigReportParameterType) GetLovSql() string`

GetLovSql returns the LovSql field if non-nil, zero value otherwise.

### GetLovSqlOk

`func (o *ConfigReportParameterType) GetLovSqlOk() (*string, bool)`

GetLovSqlOk returns a tuple with the LovSql field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLovSql

`func (o *ConfigReportParameterType) SetLovSql(v string)`

SetLovSql sets LovSql field to given value.

### HasLovSql

`func (o *ConfigReportParameterType) HasLovSql() bool`

HasLovSql returns a boolean if a field has been set.

### GetSequence

`func (o *ConfigReportParameterType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *ConfigReportParameterType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *ConfigReportParameterType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *ConfigReportParameterType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


