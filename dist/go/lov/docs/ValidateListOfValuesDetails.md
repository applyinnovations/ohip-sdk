# ValidateListOfValuesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Match** | Pointer to [**ListOfValuesMatchType**](ListOfValuesMatchType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewValidateListOfValuesDetails

`func NewValidateListOfValuesDetails() *ValidateListOfValuesDetails`

NewValidateListOfValuesDetails instantiates a new ValidateListOfValuesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValidateListOfValuesDetailsWithDefaults

`func NewValidateListOfValuesDetailsWithDefaults() *ValidateListOfValuesDetails`

NewValidateListOfValuesDetailsWithDefaults instantiates a new ValidateListOfValuesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ValidateListOfValuesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ValidateListOfValuesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ValidateListOfValuesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ValidateListOfValuesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMatch

`func (o *ValidateListOfValuesDetails) GetMatch() ListOfValuesMatchType`

GetMatch returns the Match field if non-nil, zero value otherwise.

### GetMatchOk

`func (o *ValidateListOfValuesDetails) GetMatchOk() (*ListOfValuesMatchType, bool)`

GetMatchOk returns a tuple with the Match field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatch

`func (o *ValidateListOfValuesDetails) SetMatch(v ListOfValuesMatchType)`

SetMatch sets Match field to given value.

### HasMatch

`func (o *ValidateListOfValuesDetails) HasMatch() bool`

HasMatch returns a boolean if a field has been set.

### GetWarnings

`func (o *ValidateListOfValuesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ValidateListOfValuesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ValidateListOfValuesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ValidateListOfValuesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


