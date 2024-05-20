# ValidatedForgetProfiles

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ValidateForgetProfilesResults** | Pointer to [**[]ForgetProfileResultType**](ForgetProfileResultType.md) | Result of processing/validation for forgetting a profile. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewValidatedForgetProfiles

`func NewValidatedForgetProfiles() *ValidatedForgetProfiles`

NewValidatedForgetProfiles instantiates a new ValidatedForgetProfiles object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValidatedForgetProfilesWithDefaults

`func NewValidatedForgetProfilesWithDefaults() *ValidatedForgetProfiles`

NewValidatedForgetProfilesWithDefaults instantiates a new ValidatedForgetProfiles object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ValidatedForgetProfiles) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ValidatedForgetProfiles) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ValidatedForgetProfiles) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ValidatedForgetProfiles) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetValidateForgetProfilesResults

`func (o *ValidatedForgetProfiles) GetValidateForgetProfilesResults() []ForgetProfileResultType`

GetValidateForgetProfilesResults returns the ValidateForgetProfilesResults field if non-nil, zero value otherwise.

### GetValidateForgetProfilesResultsOk

`func (o *ValidatedForgetProfiles) GetValidateForgetProfilesResultsOk() (*[]ForgetProfileResultType, bool)`

GetValidateForgetProfilesResultsOk returns a tuple with the ValidateForgetProfilesResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidateForgetProfilesResults

`func (o *ValidatedForgetProfiles) SetValidateForgetProfilesResults(v []ForgetProfileResultType)`

SetValidateForgetProfilesResults sets ValidateForgetProfilesResults field to given value.

### HasValidateForgetProfilesResults

`func (o *ValidatedForgetProfiles) HasValidateForgetProfilesResults() bool`

HasValidateForgetProfilesResults returns a boolean if a field has been set.

### GetWarnings

`func (o *ValidatedForgetProfiles) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ValidatedForgetProfiles) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ValidatedForgetProfiles) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ValidatedForgetProfiles) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


