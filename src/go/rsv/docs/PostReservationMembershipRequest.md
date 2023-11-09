# PostReservationMembershipRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ReservationMemberships** | Pointer to [**[]ReservationMembershipType**](ReservationMembershipType.md) | Membership information for the membership card which has to be attached to the reservation. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostReservationMembershipRequest

`func NewPostReservationMembershipRequest() *PostReservationMembershipRequest`

NewPostReservationMembershipRequest instantiates a new PostReservationMembershipRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostReservationMembershipRequestWithDefaults

`func NewPostReservationMembershipRequestWithDefaults() *PostReservationMembershipRequest`

NewPostReservationMembershipRequestWithDefaults instantiates a new PostReservationMembershipRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PostReservationMembershipRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PostReservationMembershipRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PostReservationMembershipRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PostReservationMembershipRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *PostReservationMembershipRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostReservationMembershipRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostReservationMembershipRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostReservationMembershipRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationId

`func (o *PostReservationMembershipRequest) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *PostReservationMembershipRequest) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *PostReservationMembershipRequest) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *PostReservationMembershipRequest) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetReservationMemberships

`func (o *PostReservationMembershipRequest) GetReservationMemberships() []ReservationMembershipType`

GetReservationMemberships returns the ReservationMemberships field if non-nil, zero value otherwise.

### GetReservationMembershipsOk

`func (o *PostReservationMembershipRequest) GetReservationMembershipsOk() (*[]ReservationMembershipType, bool)`

GetReservationMembershipsOk returns a tuple with the ReservationMemberships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationMemberships

`func (o *PostReservationMembershipRequest) SetReservationMemberships(v []ReservationMembershipType)`

SetReservationMemberships sets ReservationMemberships field to given value.

### HasReservationMemberships

`func (o *PostReservationMembershipRequest) HasReservationMemberships() bool`

HasReservationMemberships returns a boolean if a field has been set.

### GetWarnings

`func (o *PostReservationMembershipRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostReservationMembershipRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostReservationMembershipRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostReservationMembershipRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


