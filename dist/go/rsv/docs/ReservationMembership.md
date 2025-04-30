# ReservationMembership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ReservationMemberships** | Pointer to [**[]ReservationMembershipType**](ReservationMembershipType.md) | Membership information for the membership card which has to be attached to the reservation. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationMembership

`func NewReservationMembership() *ReservationMembership`

NewReservationMembership instantiates a new ReservationMembership object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationMembershipWithDefaults

`func NewReservationMembershipWithDefaults() *ReservationMembership`

NewReservationMembershipWithDefaults instantiates a new ReservationMembership object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ReservationMembership) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationMembership) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationMembership) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationMembership) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *ReservationMembership) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ReservationMembership) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ReservationMembership) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ReservationMembership) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetReservationMemberships

`func (o *ReservationMembership) GetReservationMemberships() []ReservationMembershipType`

GetReservationMemberships returns the ReservationMemberships field if non-nil, zero value otherwise.

### GetReservationMembershipsOk

`func (o *ReservationMembership) GetReservationMembershipsOk() (*[]ReservationMembershipType, bool)`

GetReservationMembershipsOk returns a tuple with the ReservationMemberships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationMemberships

`func (o *ReservationMembership) SetReservationMemberships(v []ReservationMembershipType)`

SetReservationMemberships sets ReservationMemberships field to given value.

### HasReservationMemberships

`func (o *ReservationMembership) HasReservationMemberships() bool`

HasReservationMemberships returns a boolean if a field has been set.

### GetLinks

`func (o *ReservationMembership) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationMembership) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationMembership) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationMembership) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationMembership) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationMembership) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationMembership) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationMembership) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


