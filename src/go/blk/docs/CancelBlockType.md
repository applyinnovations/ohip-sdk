# CancelBlockType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockIdList** | Pointer to [**BlockIdList**](BlockIdList.md) |  | [optional] 
**CancellationDetails** | Pointer to [**CancellationDetailsType**](CancellationDetailsType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Opera Hotel code for the cancel block operation. | [optional] 
**PMReservationsCancellationDetails** | Pointer to [**CancellationDetailsType**](CancellationDetailsType.md) |  | [optional] 
**StartDate** | Pointer to **string** | Start date of the block to be cancelled. | [optional] 

## Methods

### NewCancelBlockType

`func NewCancelBlockType() *CancelBlockType`

NewCancelBlockType instantiates a new CancelBlockType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancelBlockTypeWithDefaults

`func NewCancelBlockTypeWithDefaults() *CancelBlockType`

NewCancelBlockTypeWithDefaults instantiates a new CancelBlockType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockIdList

`func (o *CancelBlockType) GetBlockIdList() BlockIdList`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *CancelBlockType) GetBlockIdListOk() (*BlockIdList, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *CancelBlockType) SetBlockIdList(v BlockIdList)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *CancelBlockType) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetCancellationDetails

`func (o *CancelBlockType) GetCancellationDetails() CancellationDetailsType`

GetCancellationDetails returns the CancellationDetails field if non-nil, zero value otherwise.

### GetCancellationDetailsOk

`func (o *CancelBlockType) GetCancellationDetailsOk() (*CancellationDetailsType, bool)`

GetCancellationDetailsOk returns a tuple with the CancellationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationDetails

`func (o *CancelBlockType) SetCancellationDetails(v CancellationDetailsType)`

SetCancellationDetails sets CancellationDetails field to given value.

### HasCancellationDetails

`func (o *CancelBlockType) HasCancellationDetails() bool`

HasCancellationDetails returns a boolean if a field has been set.

### GetHotelId

`func (o *CancelBlockType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CancelBlockType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CancelBlockType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CancelBlockType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPMReservationsCancellationDetails

`func (o *CancelBlockType) GetPMReservationsCancellationDetails() CancellationDetailsType`

GetPMReservationsCancellationDetails returns the PMReservationsCancellationDetails field if non-nil, zero value otherwise.

### GetPMReservationsCancellationDetailsOk

`func (o *CancelBlockType) GetPMReservationsCancellationDetailsOk() (*CancellationDetailsType, bool)`

GetPMReservationsCancellationDetailsOk returns a tuple with the PMReservationsCancellationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPMReservationsCancellationDetails

`func (o *CancelBlockType) SetPMReservationsCancellationDetails(v CancellationDetailsType)`

SetPMReservationsCancellationDetails sets PMReservationsCancellationDetails field to given value.

### HasPMReservationsCancellationDetails

`func (o *CancelBlockType) HasPMReservationsCancellationDetails() bool`

HasPMReservationsCancellationDetails returns a boolean if a field has been set.

### GetStartDate

`func (o *CancelBlockType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *CancelBlockType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *CancelBlockType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *CancelBlockType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


