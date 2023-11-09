# PostReservationPreferenceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ReservationPreferences** | Pointer to [**[]PreferenceTypeType**](PreferenceTypeType.md) | Preference information for the reservation. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostReservationPreferenceRequest

`func NewPostReservationPreferenceRequest() *PostReservationPreferenceRequest`

NewPostReservationPreferenceRequest instantiates a new PostReservationPreferenceRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostReservationPreferenceRequestWithDefaults

`func NewPostReservationPreferenceRequestWithDefaults() *PostReservationPreferenceRequest`

NewPostReservationPreferenceRequestWithDefaults instantiates a new PostReservationPreferenceRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PostReservationPreferenceRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PostReservationPreferenceRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PostReservationPreferenceRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PostReservationPreferenceRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *PostReservationPreferenceRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostReservationPreferenceRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostReservationPreferenceRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostReservationPreferenceRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationId

`func (o *PostReservationPreferenceRequest) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *PostReservationPreferenceRequest) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *PostReservationPreferenceRequest) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *PostReservationPreferenceRequest) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetReservationPreferences

`func (o *PostReservationPreferenceRequest) GetReservationPreferences() []PreferenceTypeType`

GetReservationPreferences returns the ReservationPreferences field if non-nil, zero value otherwise.

### GetReservationPreferencesOk

`func (o *PostReservationPreferenceRequest) GetReservationPreferencesOk() (*[]PreferenceTypeType, bool)`

GetReservationPreferencesOk returns a tuple with the ReservationPreferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPreferences

`func (o *PostReservationPreferenceRequest) SetReservationPreferences(v []PreferenceTypeType)`

SetReservationPreferences sets ReservationPreferences field to given value.

### HasReservationPreferences

`func (o *PostReservationPreferenceRequest) HasReservationPreferences() bool`

HasReservationPreferences returns a boolean if a field has been set.

### GetWarnings

`func (o *PostReservationPreferenceRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostReservationPreferenceRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostReservationPreferenceRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostReservationPreferenceRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


