# ExclusivePreferences

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelExclusivePreferences** | Pointer to [**[]ConfigHotelExclusivePreferenceType**](ConfigHotelExclusivePreferenceType.md) | This gives detailed information about a Exclusive preference at the property level. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewExclusivePreferences

`func NewExclusivePreferences() *ExclusivePreferences`

NewExclusivePreferences instantiates a new ExclusivePreferences object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExclusivePreferencesWithDefaults

`func NewExclusivePreferencesWithDefaults() *ExclusivePreferences`

NewExclusivePreferencesWithDefaults instantiates a new ExclusivePreferences object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelExclusivePreferences

`func (o *ExclusivePreferences) GetHotelExclusivePreferences() []ConfigHotelExclusivePreferenceType`

GetHotelExclusivePreferences returns the HotelExclusivePreferences field if non-nil, zero value otherwise.

### GetHotelExclusivePreferencesOk

`func (o *ExclusivePreferences) GetHotelExclusivePreferencesOk() (*[]ConfigHotelExclusivePreferenceType, bool)`

GetHotelExclusivePreferencesOk returns a tuple with the HotelExclusivePreferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelExclusivePreferences

`func (o *ExclusivePreferences) SetHotelExclusivePreferences(v []ConfigHotelExclusivePreferenceType)`

SetHotelExclusivePreferences sets HotelExclusivePreferences field to given value.

### HasHotelExclusivePreferences

`func (o *ExclusivePreferences) HasHotelExclusivePreferences() bool`

HasHotelExclusivePreferences returns a boolean if a field has been set.

### GetLinks

`func (o *ExclusivePreferences) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ExclusivePreferences) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ExclusivePreferences) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ExclusivePreferences) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ExclusivePreferences) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ExclusivePreferences) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ExclusivePreferences) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ExclusivePreferences) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


