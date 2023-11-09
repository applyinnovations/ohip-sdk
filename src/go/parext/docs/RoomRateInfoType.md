# RoomRateInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Packages** | Pointer to [**[]CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**PriceInfo** | Pointer to [**[]RoomRatePriceInfoType**](RoomRatePriceInfoType.md) |  | [optional] 

## Methods

### NewRoomRateInfoType

`func NewRoomRateInfoType() *RoomRateInfoType`

NewRoomRateInfoType instantiates a new RoomRateInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomRateInfoTypeWithDefaults

`func NewRoomRateInfoTypeWithDefaults() *RoomRateInfoType`

NewRoomRateInfoTypeWithDefaults instantiates a new RoomRateInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPackages

`func (o *RoomRateInfoType) GetPackages() []CodeDescriptionType`

GetPackages returns the Packages field if non-nil, zero value otherwise.

### GetPackagesOk

`func (o *RoomRateInfoType) GetPackagesOk() (*[]CodeDescriptionType, bool)`

GetPackagesOk returns a tuple with the Packages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackages

`func (o *RoomRateInfoType) SetPackages(v []CodeDescriptionType)`

SetPackages sets Packages field to given value.

### HasPackages

`func (o *RoomRateInfoType) HasPackages() bool`

HasPackages returns a boolean if a field has been set.

### GetPriceInfo

`func (o *RoomRateInfoType) GetPriceInfo() []RoomRatePriceInfoType`

GetPriceInfo returns the PriceInfo field if non-nil, zero value otherwise.

### GetPriceInfoOk

`func (o *RoomRateInfoType) GetPriceInfoOk() (*[]RoomRatePriceInfoType, bool)`

GetPriceInfoOk returns a tuple with the PriceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceInfo

`func (o *RoomRateInfoType) SetPriceInfo(v []RoomRatePriceInfoType)`

SetPriceInfo sets PriceInfo field to given value.

### HasPriceInfo

`func (o *RoomRateInfoType) HasPriceInfo() bool`

HasPriceInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


