# MassRateChangeStatusType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompletedRatePlans** | Pointer to **int32** | Total number of completed rate codes. | [optional] 
**Details** | Pointer to [**MassRateChangeDetailLogListType**](MassRateChangeDetailLogListType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Property code. | [optional] 
**Status** | Pointer to [**MassRateChangeProcessStatusType**](MassRateChangeProcessStatusType.md) |  | [optional] 
**TotalRatePlans** | Pointer to **int32** | Total number of rate codes being processed. | [optional] 

## Methods

### NewMassRateChangeStatusType

`func NewMassRateChangeStatusType() *MassRateChangeStatusType`

NewMassRateChangeStatusType instantiates a new MassRateChangeStatusType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMassRateChangeStatusTypeWithDefaults

`func NewMassRateChangeStatusTypeWithDefaults() *MassRateChangeStatusType`

NewMassRateChangeStatusTypeWithDefaults instantiates a new MassRateChangeStatusType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompletedRatePlans

`func (o *MassRateChangeStatusType) GetCompletedRatePlans() int32`

GetCompletedRatePlans returns the CompletedRatePlans field if non-nil, zero value otherwise.

### GetCompletedRatePlansOk

`func (o *MassRateChangeStatusType) GetCompletedRatePlansOk() (*int32, bool)`

GetCompletedRatePlansOk returns a tuple with the CompletedRatePlans field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedRatePlans

`func (o *MassRateChangeStatusType) SetCompletedRatePlans(v int32)`

SetCompletedRatePlans sets CompletedRatePlans field to given value.

### HasCompletedRatePlans

`func (o *MassRateChangeStatusType) HasCompletedRatePlans() bool`

HasCompletedRatePlans returns a boolean if a field has been set.

### GetDetails

`func (o *MassRateChangeStatusType) GetDetails() MassRateChangeDetailLogListType`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *MassRateChangeStatusType) GetDetailsOk() (*MassRateChangeDetailLogListType, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *MassRateChangeStatusType) SetDetails(v MassRateChangeDetailLogListType)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *MassRateChangeStatusType) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetHotelId

`func (o *MassRateChangeStatusType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MassRateChangeStatusType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MassRateChangeStatusType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MassRateChangeStatusType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetStatus

`func (o *MassRateChangeStatusType) GetStatus() MassRateChangeProcessStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *MassRateChangeStatusType) GetStatusOk() (*MassRateChangeProcessStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *MassRateChangeStatusType) SetStatus(v MassRateChangeProcessStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *MassRateChangeStatusType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTotalRatePlans

`func (o *MassRateChangeStatusType) GetTotalRatePlans() int32`

GetTotalRatePlans returns the TotalRatePlans field if non-nil, zero value otherwise.

### GetTotalRatePlansOk

`func (o *MassRateChangeStatusType) GetTotalRatePlansOk() (*int32, bool)`

GetTotalRatePlansOk returns a tuple with the TotalRatePlans field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRatePlans

`func (o *MassRateChangeStatusType) SetTotalRatePlans(v int32)`

SetTotalRatePlans sets TotalRatePlans field to given value.

### HasTotalRatePlans

`func (o *MassRateChangeStatusType) HasTotalRatePlans() bool`

HasTotalRatePlans returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


