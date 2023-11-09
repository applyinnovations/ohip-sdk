# ReservationLocatorsDetailsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ReservationIdList** | Pointer to [**ReservationIdList**](ReservationIdList.md) |  | [optional] 
**ReservationLocators** | Pointer to [**ReservationLocatorsType**](ReservationLocatorsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewReservationLocatorsDetailsInfo

`func NewReservationLocatorsDetailsInfo() *ReservationLocatorsDetailsInfo`

NewReservationLocatorsDetailsInfo instantiates a new ReservationLocatorsDetailsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationLocatorsDetailsInfoWithDefaults

`func NewReservationLocatorsDetailsInfoWithDefaults() *ReservationLocatorsDetailsInfo`

NewReservationLocatorsDetailsInfoWithDefaults instantiates a new ReservationLocatorsDetailsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ReservationLocatorsDetailsInfo) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationLocatorsDetailsInfo) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationLocatorsDetailsInfo) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationLocatorsDetailsInfo) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *ReservationLocatorsDetailsInfo) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationLocatorsDetailsInfo) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationLocatorsDetailsInfo) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationLocatorsDetailsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationIdList

`func (o *ReservationLocatorsDetailsInfo) GetReservationIdList() ReservationIdList`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *ReservationLocatorsDetailsInfo) GetReservationIdListOk() (*ReservationIdList, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *ReservationLocatorsDetailsInfo) SetReservationIdList(v ReservationIdList)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *ReservationLocatorsDetailsInfo) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetReservationLocators

`func (o *ReservationLocatorsDetailsInfo) GetReservationLocators() ReservationLocatorsType`

GetReservationLocators returns the ReservationLocators field if non-nil, zero value otherwise.

### GetReservationLocatorsOk

`func (o *ReservationLocatorsDetailsInfo) GetReservationLocatorsOk() (*ReservationLocatorsType, bool)`

GetReservationLocatorsOk returns a tuple with the ReservationLocators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationLocators

`func (o *ReservationLocatorsDetailsInfo) SetReservationLocators(v ReservationLocatorsType)`

SetReservationLocators sets ReservationLocators field to given value.

### HasReservationLocators

`func (o *ReservationLocatorsDetailsInfo) HasReservationLocators() bool`

HasReservationLocators returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationLocatorsDetailsInfo) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationLocatorsDetailsInfo) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationLocatorsDetailsInfo) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationLocatorsDetailsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


