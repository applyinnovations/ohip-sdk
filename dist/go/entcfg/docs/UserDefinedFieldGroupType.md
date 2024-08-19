# UserDefinedFieldGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GroupCode** | Pointer to **string** | The Code of User Defined Field Group. | [optional] 
**Description** | Pointer to **string** | The Description of User Defined Field Group. | [optional] 
**DataType** | Pointer to [**UserDefinedFieldGroupDataType**](UserDefinedFieldGroupDataType.md) |  | [optional] 
**DataLength** | Pointer to **float32** | Length of field values of User Defined Field Group. | [optional] 
**Protected** | Pointer to **bool** | Indicates that if the group could be deleted. This is a readonly element an it is only used in the fetch operation. | [optional] 

## Methods

### NewUserDefinedFieldGroupType

`func NewUserDefinedFieldGroupType() *UserDefinedFieldGroupType`

NewUserDefinedFieldGroupType instantiates a new UserDefinedFieldGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserDefinedFieldGroupTypeWithDefaults

`func NewUserDefinedFieldGroupTypeWithDefaults() *UserDefinedFieldGroupType`

NewUserDefinedFieldGroupTypeWithDefaults instantiates a new UserDefinedFieldGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGroupCode

`func (o *UserDefinedFieldGroupType) GetGroupCode() string`

GetGroupCode returns the GroupCode field if non-nil, zero value otherwise.

### GetGroupCodeOk

`func (o *UserDefinedFieldGroupType) GetGroupCodeOk() (*string, bool)`

GetGroupCodeOk returns a tuple with the GroupCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupCode

`func (o *UserDefinedFieldGroupType) SetGroupCode(v string)`

SetGroupCode sets GroupCode field to given value.

### HasGroupCode

`func (o *UserDefinedFieldGroupType) HasGroupCode() bool`

HasGroupCode returns a boolean if a field has been set.

### GetDescription

`func (o *UserDefinedFieldGroupType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *UserDefinedFieldGroupType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *UserDefinedFieldGroupType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *UserDefinedFieldGroupType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDataType

`func (o *UserDefinedFieldGroupType) GetDataType() UserDefinedFieldGroupDataType`

GetDataType returns the DataType field if non-nil, zero value otherwise.

### GetDataTypeOk

`func (o *UserDefinedFieldGroupType) GetDataTypeOk() (*UserDefinedFieldGroupDataType, bool)`

GetDataTypeOk returns a tuple with the DataType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataType

`func (o *UserDefinedFieldGroupType) SetDataType(v UserDefinedFieldGroupDataType)`

SetDataType sets DataType field to given value.

### HasDataType

`func (o *UserDefinedFieldGroupType) HasDataType() bool`

HasDataType returns a boolean if a field has been set.

### GetDataLength

`func (o *UserDefinedFieldGroupType) GetDataLength() float32`

GetDataLength returns the DataLength field if non-nil, zero value otherwise.

### GetDataLengthOk

`func (o *UserDefinedFieldGroupType) GetDataLengthOk() (*float32, bool)`

GetDataLengthOk returns a tuple with the DataLength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataLength

`func (o *UserDefinedFieldGroupType) SetDataLength(v float32)`

SetDataLength sets DataLength field to given value.

### HasDataLength

`func (o *UserDefinedFieldGroupType) HasDataLength() bool`

HasDataLength returns a boolean if a field has been set.

### GetProtected

`func (o *UserDefinedFieldGroupType) GetProtected() bool`

GetProtected returns the Protected field if non-nil, zero value otherwise.

### GetProtectedOk

`func (o *UserDefinedFieldGroupType) GetProtectedOk() (*bool, bool)`

GetProtectedOk returns a tuple with the Protected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtected

`func (o *UserDefinedFieldGroupType) SetProtected(v bool)`

SetProtected sets Protected field to given value.

### HasProtected

`func (o *UserDefinedFieldGroupType) HasProtected() bool`

HasProtected returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


