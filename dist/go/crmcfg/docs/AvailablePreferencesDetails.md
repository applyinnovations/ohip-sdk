# AvailablePreferencesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PreferenceCollection** | Pointer to [**[]PreferenceTypeType**](PreferenceTypeType.md) | A collection of preferences | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAvailablePreferencesDetails

`func NewAvailablePreferencesDetails() *AvailablePreferencesDetails`

NewAvailablePreferencesDetails instantiates a new AvailablePreferencesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAvailablePreferencesDetailsWithDefaults

`func NewAvailablePreferencesDetailsWithDefaults() *AvailablePreferencesDetails`

NewAvailablePreferencesDetailsWithDefaults instantiates a new AvailablePreferencesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPreferenceCollection

`func (o *AvailablePreferencesDetails) GetPreferenceCollection() []PreferenceTypeType`

GetPreferenceCollection returns the PreferenceCollection field if non-nil, zero value otherwise.

### GetPreferenceCollectionOk

`func (o *AvailablePreferencesDetails) GetPreferenceCollectionOk() (*[]PreferenceTypeType, bool)`

GetPreferenceCollectionOk returns a tuple with the PreferenceCollection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceCollection

`func (o *AvailablePreferencesDetails) SetPreferenceCollection(v []PreferenceTypeType)`

SetPreferenceCollection sets PreferenceCollection field to given value.

### HasPreferenceCollection

`func (o *AvailablePreferencesDetails) HasPreferenceCollection() bool`

HasPreferenceCollection returns a boolean if a field has been set.

### GetLinks

`func (o *AvailablePreferencesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AvailablePreferencesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AvailablePreferencesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AvailablePreferencesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AvailablePreferencesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AvailablePreferencesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AvailablePreferencesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AvailablePreferencesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


