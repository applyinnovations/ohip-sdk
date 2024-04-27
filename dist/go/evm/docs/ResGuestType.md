# ResGuestType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ArrivalTransport** | Pointer to [**TransportInfoType**](TransportInfoType.md) |  | [optional] 
**DepartureTransport** | Pointer to [**TransportInfoType**](TransportInfoType.md) |  | [optional] 
**Primary** | Pointer to **bool** | When true indicates this is the primary guest. | [optional] 
**ProfileInfo** | Pointer to [**ResGuestTypeProfileInfo**](ResGuestTypeProfileInfo.md) |  | [optional] 
**ReservationGuestRPH** | Pointer to **string** | This is a reference placeholder, used as an index for this guest in this reservation. In the ResGuest object it is used like all other RPH attributes to send the delta of a reservation. It is used by the RoomStay and Service objects to indicate which guests are associated with that functionSpaceDetails stay or service. | [optional] 
**VisaInfo** | Pointer to [**VisaInfoType**](VisaInfoType.md) |  | [optional] 

## Methods

### NewResGuestType

`func NewResGuestType() *ResGuestType`

NewResGuestType instantiates a new ResGuestType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResGuestTypeWithDefaults

`func NewResGuestTypeWithDefaults() *ResGuestType`

NewResGuestTypeWithDefaults instantiates a new ResGuestType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArrivalTransport

`func (o *ResGuestType) GetArrivalTransport() TransportInfoType`

GetArrivalTransport returns the ArrivalTransport field if non-nil, zero value otherwise.

### GetArrivalTransportOk

`func (o *ResGuestType) GetArrivalTransportOk() (*TransportInfoType, bool)`

GetArrivalTransportOk returns a tuple with the ArrivalTransport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalTransport

`func (o *ResGuestType) SetArrivalTransport(v TransportInfoType)`

SetArrivalTransport sets ArrivalTransport field to given value.

### HasArrivalTransport

`func (o *ResGuestType) HasArrivalTransport() bool`

HasArrivalTransport returns a boolean if a field has been set.

### GetDepartureTransport

`func (o *ResGuestType) GetDepartureTransport() TransportInfoType`

GetDepartureTransport returns the DepartureTransport field if non-nil, zero value otherwise.

### GetDepartureTransportOk

`func (o *ResGuestType) GetDepartureTransportOk() (*TransportInfoType, bool)`

GetDepartureTransportOk returns a tuple with the DepartureTransport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureTransport

`func (o *ResGuestType) SetDepartureTransport(v TransportInfoType)`

SetDepartureTransport sets DepartureTransport field to given value.

### HasDepartureTransport

`func (o *ResGuestType) HasDepartureTransport() bool`

HasDepartureTransport returns a boolean if a field has been set.

### GetPrimary

`func (o *ResGuestType) GetPrimary() bool`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *ResGuestType) GetPrimaryOk() (*bool, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *ResGuestType) SetPrimary(v bool)`

SetPrimary sets Primary field to given value.

### HasPrimary

`func (o *ResGuestType) HasPrimary() bool`

HasPrimary returns a boolean if a field has been set.

### GetProfileInfo

`func (o *ResGuestType) GetProfileInfo() ResGuestTypeProfileInfo`

GetProfileInfo returns the ProfileInfo field if non-nil, zero value otherwise.

### GetProfileInfoOk

`func (o *ResGuestType) GetProfileInfoOk() (*ResGuestTypeProfileInfo, bool)`

GetProfileInfoOk returns a tuple with the ProfileInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileInfo

`func (o *ResGuestType) SetProfileInfo(v ResGuestTypeProfileInfo)`

SetProfileInfo sets ProfileInfo field to given value.

### HasProfileInfo

`func (o *ResGuestType) HasProfileInfo() bool`

HasProfileInfo returns a boolean if a field has been set.

### GetReservationGuestRPH

`func (o *ResGuestType) GetReservationGuestRPH() string`

GetReservationGuestRPH returns the ReservationGuestRPH field if non-nil, zero value otherwise.

### GetReservationGuestRPHOk

`func (o *ResGuestType) GetReservationGuestRPHOk() (*string, bool)`

GetReservationGuestRPHOk returns a tuple with the ReservationGuestRPH field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationGuestRPH

`func (o *ResGuestType) SetReservationGuestRPH(v string)`

SetReservationGuestRPH sets ReservationGuestRPH field to given value.

### HasReservationGuestRPH

`func (o *ResGuestType) HasReservationGuestRPH() bool`

HasReservationGuestRPH returns a boolean if a field has been set.

### GetVisaInfo

`func (o *ResGuestType) GetVisaInfo() VisaInfoType`

GetVisaInfo returns the VisaInfo field if non-nil, zero value otherwise.

### GetVisaInfoOk

`func (o *ResGuestType) GetVisaInfoOk() (*VisaInfoType, bool)`

GetVisaInfoOk returns a tuple with the VisaInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVisaInfo

`func (o *ResGuestType) SetVisaInfo(v VisaInfoType)`

SetVisaInfo sets VisaInfo field to given value.

### HasVisaInfo

`func (o *ResGuestType) HasVisaInfo() bool`

HasVisaInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


