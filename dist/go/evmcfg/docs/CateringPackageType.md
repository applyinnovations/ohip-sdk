# CateringPackageType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventsList** | Pointer to [**[]CateringPackageEventType**](CateringPackageEventType.md) | Collection of multiple Events associated with a particular Catering Packages. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code associated with the Catering Package. | [optional] 
**PackageDetail** | Pointer to [**CateringPackageInfoType**](CateringPackageInfoType.md) |  | [optional] 
**PkgId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**PricingList** | Pointer to [**[]CateringPackagePricingType**](CateringPackagePricingType.md) | Collection of multiple Pricing Details associated with a particular Catering Package. | [optional] 

## Methods

### NewCateringPackageType

`func NewCateringPackageType() *CateringPackageType`

NewCateringPackageType instantiates a new CateringPackageType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringPackageTypeWithDefaults

`func NewCateringPackageTypeWithDefaults() *CateringPackageType`

NewCateringPackageTypeWithDefaults instantiates a new CateringPackageType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventsList

`func (o *CateringPackageType) GetEventsList() []CateringPackageEventType`

GetEventsList returns the EventsList field if non-nil, zero value otherwise.

### GetEventsListOk

`func (o *CateringPackageType) GetEventsListOk() (*[]CateringPackageEventType, bool)`

GetEventsListOk returns a tuple with the EventsList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsList

`func (o *CateringPackageType) SetEventsList(v []CateringPackageEventType)`

SetEventsList sets EventsList field to given value.

### HasEventsList

`func (o *CateringPackageType) HasEventsList() bool`

HasEventsList returns a boolean if a field has been set.

### GetHotelId

`func (o *CateringPackageType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CateringPackageType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CateringPackageType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CateringPackageType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPackageDetail

`func (o *CateringPackageType) GetPackageDetail() CateringPackageInfoType`

GetPackageDetail returns the PackageDetail field if non-nil, zero value otherwise.

### GetPackageDetailOk

`func (o *CateringPackageType) GetPackageDetailOk() (*CateringPackageInfoType, bool)`

GetPackageDetailOk returns a tuple with the PackageDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageDetail

`func (o *CateringPackageType) SetPackageDetail(v CateringPackageInfoType)`

SetPackageDetail sets PackageDetail field to given value.

### HasPackageDetail

`func (o *CateringPackageType) HasPackageDetail() bool`

HasPackageDetail returns a boolean if a field has been set.

### GetPkgId

`func (o *CateringPackageType) GetPkgId() UniqueIDType`

GetPkgId returns the PkgId field if non-nil, zero value otherwise.

### GetPkgIdOk

`func (o *CateringPackageType) GetPkgIdOk() (*UniqueIDType, bool)`

GetPkgIdOk returns a tuple with the PkgId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPkgId

`func (o *CateringPackageType) SetPkgId(v UniqueIDType)`

SetPkgId sets PkgId field to given value.

### HasPkgId

`func (o *CateringPackageType) HasPkgId() bool`

HasPkgId returns a boolean if a field has been set.

### GetPricingList

`func (o *CateringPackageType) GetPricingList() []CateringPackagePricingType`

GetPricingList returns the PricingList field if non-nil, zero value otherwise.

### GetPricingListOk

`func (o *CateringPackageType) GetPricingListOk() (*[]CateringPackagePricingType, bool)`

GetPricingListOk returns a tuple with the PricingList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPricingList

`func (o *CateringPackageType) SetPricingList(v []CateringPackagePricingType)`

SetPricingList sets PricingList field to given value.

### HasPricingList

`func (o *CateringPackageType) HasPricingList() bool`

HasPricingList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


