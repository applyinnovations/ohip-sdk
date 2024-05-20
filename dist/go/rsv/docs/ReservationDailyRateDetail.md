# ReservationDailyRateDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**NewDetail** | Pointer to [**DailyRateDetailType**](DailyRateDetailType.md) |  | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationDailyRateDetail

`func NewReservationDailyRateDetail() *ReservationDailyRateDetail`

NewReservationDailyRateDetail instantiates a new ReservationDailyRateDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationDailyRateDetailWithDefaults

`func NewReservationDailyRateDetailWithDefaults() *ReservationDailyRateDetail`

NewReservationDailyRateDetailWithDefaults instantiates a new ReservationDailyRateDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ReservationDailyRateDetail) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationDailyRateDetail) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationDailyRateDetail) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationDailyRateDetail) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *ReservationDailyRateDetail) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationDailyRateDetail) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationDailyRateDetail) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationDailyRateDetail) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetNewDetail

`func (o *ReservationDailyRateDetail) GetNewDetail() DailyRateDetailType`

GetNewDetail returns the NewDetail field if non-nil, zero value otherwise.

### GetNewDetailOk

`func (o *ReservationDailyRateDetail) GetNewDetailOk() (*DailyRateDetailType, bool)`

GetNewDetailOk returns a tuple with the NewDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewDetail

`func (o *ReservationDailyRateDetail) SetNewDetail(v DailyRateDetailType)`

SetNewDetail sets NewDetail field to given value.

### HasNewDetail

`func (o *ReservationDailyRateDetail) HasNewDetail() bool`

HasNewDetail returns a boolean if a field has been set.

### GetReservationIdList

`func (o *ReservationDailyRateDetail) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *ReservationDailyRateDetail) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *ReservationDailyRateDetail) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *ReservationDailyRateDetail) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationDailyRateDetail) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationDailyRateDetail) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationDailyRateDetail) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationDailyRateDetail) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


