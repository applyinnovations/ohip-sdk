# ExternalProfileType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**Profile** | Pointer to [**ProfileType**](ProfileType.md) |  | [optional] 
**Incidents** | Pointer to [**[]IncidentType**](IncidentType.md) | Collection of Incidents for the profile. | [optional] 
**GuestStatus** | Pointer to **string** | Guest Status for the Profile. | [optional] 

## Methods

### NewExternalProfileType

`func NewExternalProfileType() *ExternalProfileType`

NewExternalProfileType instantiates a new ExternalProfileType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExternalProfileTypeWithDefaults

`func NewExternalProfileTypeWithDefaults() *ExternalProfileType`

NewExternalProfileTypeWithDefaults instantiates a new ExternalProfileType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileIdList

`func (o *ExternalProfileType) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *ExternalProfileType) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *ExternalProfileType) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *ExternalProfileType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetProfile

`func (o *ExternalProfileType) GetProfile() ProfileType`

GetProfile returns the Profile field if non-nil, zero value otherwise.

### GetProfileOk

`func (o *ExternalProfileType) GetProfileOk() (*ProfileType, bool)`

GetProfileOk returns a tuple with the Profile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfile

`func (o *ExternalProfileType) SetProfile(v ProfileType)`

SetProfile sets Profile field to given value.

### HasProfile

`func (o *ExternalProfileType) HasProfile() bool`

HasProfile returns a boolean if a field has been set.

### GetIncidents

`func (o *ExternalProfileType) GetIncidents() []IncidentType`

GetIncidents returns the Incidents field if non-nil, zero value otherwise.

### GetIncidentsOk

`func (o *ExternalProfileType) GetIncidentsOk() (*[]IncidentType, bool)`

GetIncidentsOk returns a tuple with the Incidents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncidents

`func (o *ExternalProfileType) SetIncidents(v []IncidentType)`

SetIncidents sets Incidents field to given value.

### HasIncidents

`func (o *ExternalProfileType) HasIncidents() bool`

HasIncidents returns a boolean if a field has been set.

### GetGuestStatus

`func (o *ExternalProfileType) GetGuestStatus() string`

GetGuestStatus returns the GuestStatus field if non-nil, zero value otherwise.

### GetGuestStatusOk

`func (o *ExternalProfileType) GetGuestStatusOk() (*string, bool)`

GetGuestStatusOk returns a tuple with the GuestStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestStatus

`func (o *ExternalProfileType) SetGuestStatus(v string)`

SetGuestStatus sets GuestStatus field to given value.

### HasGuestStatus

`func (o *ExternalProfileType) HasGuestStatus() bool`

HasGuestStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


