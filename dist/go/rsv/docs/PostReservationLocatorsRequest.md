# PostReservationLocatorsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ReservationLocators** | Pointer to [**[]ReservationLocatorType**](ReservationLocatorType.md) | Holds the Locator Information. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostReservationLocatorsRequest

`func NewPostReservationLocatorsRequest() *PostReservationLocatorsRequest`

NewPostReservationLocatorsRequest instantiates a new PostReservationLocatorsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostReservationLocatorsRequestWithDefaults

`func NewPostReservationLocatorsRequestWithDefaults() *PostReservationLocatorsRequest`

NewPostReservationLocatorsRequestWithDefaults instantiates a new PostReservationLocatorsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PostReservationLocatorsRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PostReservationLocatorsRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PostReservationLocatorsRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PostReservationLocatorsRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *PostReservationLocatorsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostReservationLocatorsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostReservationLocatorsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostReservationLocatorsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationIdList

`func (o *PostReservationLocatorsRequest) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *PostReservationLocatorsRequest) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *PostReservationLocatorsRequest) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *PostReservationLocatorsRequest) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetReservationLocators

`func (o *PostReservationLocatorsRequest) GetReservationLocators() []ReservationLocatorType`

GetReservationLocators returns the ReservationLocators field if non-nil, zero value otherwise.

### GetReservationLocatorsOk

`func (o *PostReservationLocatorsRequest) GetReservationLocatorsOk() (*[]ReservationLocatorType, bool)`

GetReservationLocatorsOk returns a tuple with the ReservationLocators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationLocators

`func (o *PostReservationLocatorsRequest) SetReservationLocators(v []ReservationLocatorType)`

SetReservationLocators sets ReservationLocators field to given value.

### HasReservationLocators

`func (o *PostReservationLocatorsRequest) HasReservationLocators() bool`

HasReservationLocators returns a boolean if a field has been set.

### GetWarnings

`func (o *PostReservationLocatorsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostReservationLocatorsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostReservationLocatorsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostReservationLocatorsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


