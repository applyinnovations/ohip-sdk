# NameValueType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DataType** | Pointer to [**NameValueDataTypeType**](NameValueDataTypeType.md) |  | [optional] 
**FormatString** | Pointer to **string** | Contains format string for values. | [optional] 
**Name** | Pointer to **string** | Contains unique key which represents for record field. | [optional] 
**Origin** | Pointer to [**NameValueOriginType**](NameValueOriginType.md) |  | [optional] 
**UsageInstruction** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**Value** | Pointer to **string** | Contains value for the record/column. | [optional] 

## Methods

### NewNameValueType

`func NewNameValueType() *NameValueType`

NewNameValueType instantiates a new NameValueType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNameValueTypeWithDefaults

`func NewNameValueTypeWithDefaults() *NameValueType`

NewNameValueTypeWithDefaults instantiates a new NameValueType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDataType

`func (o *NameValueType) GetDataType() NameValueDataTypeType`

GetDataType returns the DataType field if non-nil, zero value otherwise.

### GetDataTypeOk

`func (o *NameValueType) GetDataTypeOk() (*NameValueDataTypeType, bool)`

GetDataTypeOk returns a tuple with the DataType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataType

`func (o *NameValueType) SetDataType(v NameValueDataTypeType)`

SetDataType sets DataType field to given value.

### HasDataType

`func (o *NameValueType) HasDataType() bool`

HasDataType returns a boolean if a field has been set.

### GetFormatString

`func (o *NameValueType) GetFormatString() string`

GetFormatString returns the FormatString field if non-nil, zero value otherwise.

### GetFormatStringOk

`func (o *NameValueType) GetFormatStringOk() (*string, bool)`

GetFormatStringOk returns a tuple with the FormatString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormatString

`func (o *NameValueType) SetFormatString(v string)`

SetFormatString sets FormatString field to given value.

### HasFormatString

`func (o *NameValueType) HasFormatString() bool`

HasFormatString returns a boolean if a field has been set.

### GetName

`func (o *NameValueType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *NameValueType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *NameValueType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *NameValueType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrigin

`func (o *NameValueType) GetOrigin() NameValueOriginType`

GetOrigin returns the Origin field if non-nil, zero value otherwise.

### GetOriginOk

`func (o *NameValueType) GetOriginOk() (*NameValueOriginType, bool)`

GetOriginOk returns a tuple with the Origin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrigin

`func (o *NameValueType) SetOrigin(v NameValueOriginType)`

SetOrigin sets Origin field to given value.

### HasOrigin

`func (o *NameValueType) HasOrigin() bool`

HasOrigin returns a boolean if a field has been set.

### GetUsageInstruction

`func (o *NameValueType) GetUsageInstruction() CodeListType`

GetUsageInstruction returns the UsageInstruction field if non-nil, zero value otherwise.

### GetUsageInstructionOk

`func (o *NameValueType) GetUsageInstructionOk() (*CodeListType, bool)`

GetUsageInstructionOk returns a tuple with the UsageInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageInstruction

`func (o *NameValueType) SetUsageInstruction(v CodeListType)`

SetUsageInstruction sets UsageInstruction field to given value.

### HasUsageInstruction

`func (o *NameValueType) HasUsageInstruction() bool`

HasUsageInstruction returns a boolean if a field has been set.

### GetValue

`func (o *NameValueType) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *NameValueType) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *NameValueType) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *NameValueType) HasValue() bool`

HasValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


