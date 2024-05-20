# UserDefinedFieldValuesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserDefinedFieldValues** | Pointer to [**[]UserDefinedFieldValueType**](UserDefinedFieldValueType.md) | A recurring element that identifies the User Defined Field Value. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewUserDefinedFieldValuesToBeChanged

`func NewUserDefinedFieldValuesToBeChanged() *UserDefinedFieldValuesToBeChanged`

NewUserDefinedFieldValuesToBeChanged instantiates a new UserDefinedFieldValuesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserDefinedFieldValuesToBeChangedWithDefaults

`func NewUserDefinedFieldValuesToBeChangedWithDefaults() *UserDefinedFieldValuesToBeChanged`

NewUserDefinedFieldValuesToBeChangedWithDefaults instantiates a new UserDefinedFieldValuesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserDefinedFieldValues

`func (o *UserDefinedFieldValuesToBeChanged) GetUserDefinedFieldValues() []UserDefinedFieldValueType`

GetUserDefinedFieldValues returns the UserDefinedFieldValues field if non-nil, zero value otherwise.

### GetUserDefinedFieldValuesOk

`func (o *UserDefinedFieldValuesToBeChanged) GetUserDefinedFieldValuesOk() (*[]UserDefinedFieldValueType, bool)`

GetUserDefinedFieldValuesOk returns a tuple with the UserDefinedFieldValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFieldValues

`func (o *UserDefinedFieldValuesToBeChanged) SetUserDefinedFieldValues(v []UserDefinedFieldValueType)`

SetUserDefinedFieldValues sets UserDefinedFieldValues field to given value.

### HasUserDefinedFieldValues

`func (o *UserDefinedFieldValuesToBeChanged) HasUserDefinedFieldValues() bool`

HasUserDefinedFieldValues returns a boolean if a field has been set.

### GetLinks

`func (o *UserDefinedFieldValuesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *UserDefinedFieldValuesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *UserDefinedFieldValuesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *UserDefinedFieldValuesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *UserDefinedFieldValuesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *UserDefinedFieldValuesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *UserDefinedFieldValuesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *UserDefinedFieldValuesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


