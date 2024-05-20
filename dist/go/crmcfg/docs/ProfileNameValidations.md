# ProfileNameValidations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileNames** | Pointer to [**[]ProfileNameValidationType**](ProfileNameValidationType.md) | List of the Profile name to be configured or fetched. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProfileNameValidations

`func NewProfileNameValidations() *ProfileNameValidations`

NewProfileNameValidations instantiates a new ProfileNameValidations object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileNameValidationsWithDefaults

`func NewProfileNameValidationsWithDefaults() *ProfileNameValidations`

NewProfileNameValidationsWithDefaults instantiates a new ProfileNameValidations object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileNames

`func (o *ProfileNameValidations) GetProfileNames() []ProfileNameValidationType`

GetProfileNames returns the ProfileNames field if non-nil, zero value otherwise.

### GetProfileNamesOk

`func (o *ProfileNameValidations) GetProfileNamesOk() (*[]ProfileNameValidationType, bool)`

GetProfileNamesOk returns a tuple with the ProfileNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileNames

`func (o *ProfileNameValidations) SetProfileNames(v []ProfileNameValidationType)`

SetProfileNames sets ProfileNames field to given value.

### HasProfileNames

`func (o *ProfileNameValidations) HasProfileNames() bool`

HasProfileNames returns a boolean if a field has been set.

### GetLinks

`func (o *ProfileNameValidations) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileNameValidations) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileNameValidations) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileNameValidations) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ProfileNameValidations) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProfileNameValidations) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProfileNameValidations) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProfileNameValidations) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


