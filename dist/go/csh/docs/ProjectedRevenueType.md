# ProjectedRevenueType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProjectedRoomRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**ProjectedCateringRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**RoomNights** | Pointer to **int32** | Number of room nights for the reservation. | [optional] 

## Methods

### NewProjectedRevenueType

`func NewProjectedRevenueType() *ProjectedRevenueType`

NewProjectedRevenueType instantiates a new ProjectedRevenueType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProjectedRevenueTypeWithDefaults

`func NewProjectedRevenueTypeWithDefaults() *ProjectedRevenueType`

NewProjectedRevenueTypeWithDefaults instantiates a new ProjectedRevenueType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProjectedRoomRevenue

`func (o *ProjectedRevenueType) GetProjectedRoomRevenue() CurrencyAmountType`

GetProjectedRoomRevenue returns the ProjectedRoomRevenue field if non-nil, zero value otherwise.

### GetProjectedRoomRevenueOk

`func (o *ProjectedRevenueType) GetProjectedRoomRevenueOk() (*CurrencyAmountType, bool)`

GetProjectedRoomRevenueOk returns a tuple with the ProjectedRoomRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProjectedRoomRevenue

`func (o *ProjectedRevenueType) SetProjectedRoomRevenue(v CurrencyAmountType)`

SetProjectedRoomRevenue sets ProjectedRoomRevenue field to given value.

### HasProjectedRoomRevenue

`func (o *ProjectedRevenueType) HasProjectedRoomRevenue() bool`

HasProjectedRoomRevenue returns a boolean if a field has been set.

### GetProjectedCateringRevenue

`func (o *ProjectedRevenueType) GetProjectedCateringRevenue() CurrencyAmountType`

GetProjectedCateringRevenue returns the ProjectedCateringRevenue field if non-nil, zero value otherwise.

### GetProjectedCateringRevenueOk

`func (o *ProjectedRevenueType) GetProjectedCateringRevenueOk() (*CurrencyAmountType, bool)`

GetProjectedCateringRevenueOk returns a tuple with the ProjectedCateringRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProjectedCateringRevenue

`func (o *ProjectedRevenueType) SetProjectedCateringRevenue(v CurrencyAmountType)`

SetProjectedCateringRevenue sets ProjectedCateringRevenue field to given value.

### HasProjectedCateringRevenue

`func (o *ProjectedRevenueType) HasProjectedCateringRevenue() bool`

HasProjectedCateringRevenue returns a boolean if a field has been set.

### GetRoomNights

`func (o *ProjectedRevenueType) GetRoomNights() int32`

GetRoomNights returns the RoomNights field if non-nil, zero value otherwise.

### GetRoomNightsOk

`func (o *ProjectedRevenueType) GetRoomNightsOk() (*int32, bool)`

GetRoomNightsOk returns a tuple with the RoomNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNights

`func (o *ProjectedRevenueType) SetRoomNights(v int32)`

SetRoomNights sets RoomNights field to given value.

### HasRoomNights

`func (o *ProjectedRevenueType) HasRoomNights() bool`

HasRoomNights returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


