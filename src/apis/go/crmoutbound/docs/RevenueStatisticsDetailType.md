# RevenueStatisticsDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StayTimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**GuestName** | Pointer to **string** | Name Of The Guest. | [optional] 
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**RevenueType** | Pointer to **string** | Revenue Type for Stay. | [optional] 
**CentralRevenue** | Pointer to **float32** | Central Revenue Type for Stay. | [optional] 
**LocalRevenue** | Pointer to **float32** | Local Revenue Type for Stay. | [optional] 
**HotelId** | Pointer to **string** | Hotel of the reservation. | [optional] 

## Methods

### NewRevenueStatisticsDetailType

`func NewRevenueStatisticsDetailType() *RevenueStatisticsDetailType`

NewRevenueStatisticsDetailType instantiates a new RevenueStatisticsDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevenueStatisticsDetailTypeWithDefaults

`func NewRevenueStatisticsDetailTypeWithDefaults() *RevenueStatisticsDetailType`

NewRevenueStatisticsDetailTypeWithDefaults instantiates a new RevenueStatisticsDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStayTimeSpan

`func (o *RevenueStatisticsDetailType) GetStayTimeSpan() TimeSpanType`

GetStayTimeSpan returns the StayTimeSpan field if non-nil, zero value otherwise.

### GetStayTimeSpanOk

`func (o *RevenueStatisticsDetailType) GetStayTimeSpanOk() (*TimeSpanType, bool)`

GetStayTimeSpanOk returns a tuple with the StayTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayTimeSpan

`func (o *RevenueStatisticsDetailType) SetStayTimeSpan(v TimeSpanType)`

SetStayTimeSpan sets StayTimeSpan field to given value.

### HasStayTimeSpan

`func (o *RevenueStatisticsDetailType) HasStayTimeSpan() bool`

HasStayTimeSpan returns a boolean if a field has been set.

### GetGuestName

`func (o *RevenueStatisticsDetailType) GetGuestName() string`

GetGuestName returns the GuestName field if non-nil, zero value otherwise.

### GetGuestNameOk

`func (o *RevenueStatisticsDetailType) GetGuestNameOk() (*string, bool)`

GetGuestNameOk returns a tuple with the GuestName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestName

`func (o *RevenueStatisticsDetailType) SetGuestName(v string)`

SetGuestName sets GuestName field to given value.

### HasGuestName

`func (o *RevenueStatisticsDetailType) HasGuestName() bool`

HasGuestName returns a boolean if a field has been set.

### GetProfileIdList

`func (o *RevenueStatisticsDetailType) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *RevenueStatisticsDetailType) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *RevenueStatisticsDetailType) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *RevenueStatisticsDetailType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetReservationIdList

`func (o *RevenueStatisticsDetailType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *RevenueStatisticsDetailType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *RevenueStatisticsDetailType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *RevenueStatisticsDetailType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetRevenueType

`func (o *RevenueStatisticsDetailType) GetRevenueType() string`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *RevenueStatisticsDetailType) GetRevenueTypeOk() (*string, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *RevenueStatisticsDetailType) SetRevenueType(v string)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *RevenueStatisticsDetailType) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.

### GetCentralRevenue

`func (o *RevenueStatisticsDetailType) GetCentralRevenue() float32`

GetCentralRevenue returns the CentralRevenue field if non-nil, zero value otherwise.

### GetCentralRevenueOk

`func (o *RevenueStatisticsDetailType) GetCentralRevenueOk() (*float32, bool)`

GetCentralRevenueOk returns a tuple with the CentralRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCentralRevenue

`func (o *RevenueStatisticsDetailType) SetCentralRevenue(v float32)`

SetCentralRevenue sets CentralRevenue field to given value.

### HasCentralRevenue

`func (o *RevenueStatisticsDetailType) HasCentralRevenue() bool`

HasCentralRevenue returns a boolean if a field has been set.

### GetLocalRevenue

`func (o *RevenueStatisticsDetailType) GetLocalRevenue() float32`

GetLocalRevenue returns the LocalRevenue field if non-nil, zero value otherwise.

### GetLocalRevenueOk

`func (o *RevenueStatisticsDetailType) GetLocalRevenueOk() (*float32, bool)`

GetLocalRevenueOk returns a tuple with the LocalRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalRevenue

`func (o *RevenueStatisticsDetailType) SetLocalRevenue(v float32)`

SetLocalRevenue sets LocalRevenue field to given value.

### HasLocalRevenue

`func (o *RevenueStatisticsDetailType) HasLocalRevenue() bool`

HasLocalRevenue returns a boolean if a field has been set.

### GetHotelId

`func (o *RevenueStatisticsDetailType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RevenueStatisticsDetailType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RevenueStatisticsDetailType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RevenueStatisticsDetailType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


