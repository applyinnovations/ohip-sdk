# GuaranteeablePreferences

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AvailablePreferences** | Pointer to [**[]RequestedAvailablePreferenceType**](RequestedAvailablePreferenceType.md) | Collection of Requested and Available Guaranteeable Preference Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGuaranteeablePreferences

`func NewGuaranteeablePreferences() *GuaranteeablePreferences`

NewGuaranteeablePreferences instantiates a new GuaranteeablePreferences object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuaranteeablePreferencesWithDefaults

`func NewGuaranteeablePreferencesWithDefaults() *GuaranteeablePreferences`

NewGuaranteeablePreferencesWithDefaults instantiates a new GuaranteeablePreferences object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAvailablePreferences

`func (o *GuaranteeablePreferences) GetAvailablePreferences() []RequestedAvailablePreferenceType`

GetAvailablePreferences returns the AvailablePreferences field if non-nil, zero value otherwise.

### GetAvailablePreferencesOk

`func (o *GuaranteeablePreferences) GetAvailablePreferencesOk() (*[]RequestedAvailablePreferenceType, bool)`

GetAvailablePreferencesOk returns a tuple with the AvailablePreferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailablePreferences

`func (o *GuaranteeablePreferences) SetAvailablePreferences(v []RequestedAvailablePreferenceType)`

SetAvailablePreferences sets AvailablePreferences field to given value.

### HasAvailablePreferences

`func (o *GuaranteeablePreferences) HasAvailablePreferences() bool`

HasAvailablePreferences returns a boolean if a field has been set.

### GetLinks

`func (o *GuaranteeablePreferences) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GuaranteeablePreferences) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GuaranteeablePreferences) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GuaranteeablePreferences) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GuaranteeablePreferences) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GuaranteeablePreferences) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GuaranteeablePreferences) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GuaranteeablePreferences) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


