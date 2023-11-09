# PutReservationDailyRateDetailValidationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**NewDetail** | Pointer to [**DailyRateDetailType**](DailyRateDetailType.md) |  | [optional] 
**ReservationIdList** | Pointer to [**ReservationIdList**](ReservationIdList.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutReservationDailyRateDetailValidationRequest

`func NewPutReservationDailyRateDetailValidationRequest() *PutReservationDailyRateDetailValidationRequest`

NewPutReservationDailyRateDetailValidationRequest instantiates a new PutReservationDailyRateDetailValidationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutReservationDailyRateDetailValidationRequestWithDefaults

`func NewPutReservationDailyRateDetailValidationRequestWithDefaults() *PutReservationDailyRateDetailValidationRequest`

NewPutReservationDailyRateDetailValidationRequestWithDefaults instantiates a new PutReservationDailyRateDetailValidationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PutReservationDailyRateDetailValidationRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PutReservationDailyRateDetailValidationRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PutReservationDailyRateDetailValidationRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PutReservationDailyRateDetailValidationRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *PutReservationDailyRateDetailValidationRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutReservationDailyRateDetailValidationRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutReservationDailyRateDetailValidationRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutReservationDailyRateDetailValidationRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetNewDetail

`func (o *PutReservationDailyRateDetailValidationRequest) GetNewDetail() DailyRateDetailType`

GetNewDetail returns the NewDetail field if non-nil, zero value otherwise.

### GetNewDetailOk

`func (o *PutReservationDailyRateDetailValidationRequest) GetNewDetailOk() (*DailyRateDetailType, bool)`

GetNewDetailOk returns a tuple with the NewDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewDetail

`func (o *PutReservationDailyRateDetailValidationRequest) SetNewDetail(v DailyRateDetailType)`

SetNewDetail sets NewDetail field to given value.

### HasNewDetail

`func (o *PutReservationDailyRateDetailValidationRequest) HasNewDetail() bool`

HasNewDetail returns a boolean if a field has been set.

### GetReservationIdList

`func (o *PutReservationDailyRateDetailValidationRequest) GetReservationIdList() ReservationIdList`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *PutReservationDailyRateDetailValidationRequest) GetReservationIdListOk() (*ReservationIdList, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *PutReservationDailyRateDetailValidationRequest) SetReservationIdList(v ReservationIdList)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *PutReservationDailyRateDetailValidationRequest) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetWarnings

`func (o *PutReservationDailyRateDetailValidationRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutReservationDailyRateDetailValidationRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutReservationDailyRateDetailValidationRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutReservationDailyRateDetailValidationRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


