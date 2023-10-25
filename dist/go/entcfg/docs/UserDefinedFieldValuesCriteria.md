# UserDefinedFieldValuesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**UserDefinedFieldValues** | Pointer to [**[]UserDefinedFieldValueType**](UserDefinedFieldValueType.md) | A recurring element that identifies the User Defined Field Value. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewUserDefinedFieldValuesCriteria

`func NewUserDefinedFieldValuesCriteria() *UserDefinedFieldValuesCriteria`

NewUserDefinedFieldValuesCriteria instantiates a new UserDefinedFieldValuesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserDefinedFieldValuesCriteriaWithDefaults

`func NewUserDefinedFieldValuesCriteriaWithDefaults() *UserDefinedFieldValuesCriteria`

NewUserDefinedFieldValuesCriteriaWithDefaults instantiates a new UserDefinedFieldValuesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *UserDefinedFieldValuesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *UserDefinedFieldValuesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *UserDefinedFieldValuesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *UserDefinedFieldValuesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetUserDefinedFieldValues

`func (o *UserDefinedFieldValuesCriteria) GetUserDefinedFieldValues() []UserDefinedFieldValueType`

GetUserDefinedFieldValues returns the UserDefinedFieldValues field if non-nil, zero value otherwise.

### GetUserDefinedFieldValuesOk

`func (o *UserDefinedFieldValuesCriteria) GetUserDefinedFieldValuesOk() (*[]UserDefinedFieldValueType, bool)`

GetUserDefinedFieldValuesOk returns a tuple with the UserDefinedFieldValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFieldValues

`func (o *UserDefinedFieldValuesCriteria) SetUserDefinedFieldValues(v []UserDefinedFieldValueType)`

SetUserDefinedFieldValues sets UserDefinedFieldValues field to given value.

### HasUserDefinedFieldValues

`func (o *UserDefinedFieldValuesCriteria) HasUserDefinedFieldValues() bool`

HasUserDefinedFieldValues returns a boolean if a field has been set.

### GetWarnings

`func (o *UserDefinedFieldValuesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *UserDefinedFieldValuesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *UserDefinedFieldValuesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *UserDefinedFieldValuesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


