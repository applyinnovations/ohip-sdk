# Reservation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelInfo** | Pointer to [**ReservationChannelInfoType**](ReservationChannelInfoType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**MasterInfoList** | Pointer to [**[]MasterInfoType**](MasterInfoType.md) |  | [optional] 
**Reservations** | Pointer to [**HotelReservationsType**](HotelReservationsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewReservation

`func NewReservation() *Reservation`

NewReservation instantiates a new Reservation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationWithDefaults

`func NewReservationWithDefaults() *Reservation`

NewReservationWithDefaults instantiates a new Reservation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelInfo

`func (o *Reservation) GetChannelInfo() ReservationChannelInfoType`

GetChannelInfo returns the ChannelInfo field if non-nil, zero value otherwise.

### GetChannelInfoOk

`func (o *Reservation) GetChannelInfoOk() (*ReservationChannelInfoType, bool)`

GetChannelInfoOk returns a tuple with the ChannelInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelInfo

`func (o *Reservation) SetChannelInfo(v ReservationChannelInfoType)`

SetChannelInfo sets ChannelInfo field to given value.

### HasChannelInfo

`func (o *Reservation) HasChannelInfo() bool`

HasChannelInfo returns a boolean if a field has been set.

### GetLinks

`func (o *Reservation) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Reservation) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Reservation) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Reservation) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMasterInfoList

`func (o *Reservation) GetMasterInfoList() []MasterInfoType`

GetMasterInfoList returns the MasterInfoList field if non-nil, zero value otherwise.

### GetMasterInfoListOk

`func (o *Reservation) GetMasterInfoListOk() (*[]MasterInfoType, bool)`

GetMasterInfoListOk returns a tuple with the MasterInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfoList

`func (o *Reservation) SetMasterInfoList(v []MasterInfoType)`

SetMasterInfoList sets MasterInfoList field to given value.

### HasMasterInfoList

`func (o *Reservation) HasMasterInfoList() bool`

HasMasterInfoList returns a boolean if a field has been set.

### GetReservations

`func (o *Reservation) GetReservations() HotelReservationsType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *Reservation) GetReservationsOk() (*HotelReservationsType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *Reservation) SetReservations(v HotelReservationsType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *Reservation) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetWarnings

`func (o *Reservation) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Reservation) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Reservation) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Reservation) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


