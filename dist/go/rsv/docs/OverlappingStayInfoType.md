# OverlappingStayInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**End** | Pointer to **string** | The ending value of the date range. | [optional] 
**ExcludedReservations** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code of the reservation. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**Start** | Pointer to **string** | The starting value of the date range. | [optional] 

## Methods

### NewOverlappingStayInfoType

`func NewOverlappingStayInfoType() *OverlappingStayInfoType`

NewOverlappingStayInfoType instantiates a new OverlappingStayInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOverlappingStayInfoTypeWithDefaults

`func NewOverlappingStayInfoTypeWithDefaults() *OverlappingStayInfoType`

NewOverlappingStayInfoTypeWithDefaults instantiates a new OverlappingStayInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnd

`func (o *OverlappingStayInfoType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *OverlappingStayInfoType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *OverlappingStayInfoType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *OverlappingStayInfoType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetExcludedReservations

`func (o *OverlappingStayInfoType) GetExcludedReservations() []UniqueIDType`

GetExcludedReservations returns the ExcludedReservations field if non-nil, zero value otherwise.

### GetExcludedReservationsOk

`func (o *OverlappingStayInfoType) GetExcludedReservationsOk() (*[]UniqueIDType, bool)`

GetExcludedReservationsOk returns a tuple with the ExcludedReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludedReservations

`func (o *OverlappingStayInfoType) SetExcludedReservations(v []UniqueIDType)`

SetExcludedReservations sets ExcludedReservations field to given value.

### HasExcludedReservations

`func (o *OverlappingStayInfoType) HasExcludedReservations() bool`

HasExcludedReservations returns a boolean if a field has been set.

### GetHotelId

`func (o *OverlappingStayInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *OverlappingStayInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *OverlappingStayInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *OverlappingStayInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetProfileId

`func (o *OverlappingStayInfoType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *OverlappingStayInfoType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *OverlappingStayInfoType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *OverlappingStayInfoType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetReservationId

`func (o *OverlappingStayInfoType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *OverlappingStayInfoType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *OverlappingStayInfoType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *OverlappingStayInfoType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetStart

`func (o *OverlappingStayInfoType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *OverlappingStayInfoType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *OverlappingStayInfoType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *OverlappingStayInfoType) HasStart() bool`

HasStart returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


