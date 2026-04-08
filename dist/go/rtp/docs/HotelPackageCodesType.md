# HotelPackageCodesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PackageCodeShortInfo** | Pointer to [**[]PackageCodeShortInfoType**](PackageCodeShortInfoType.md) | Basic information about the each package code. | [optional] 
**PackageCodeInfo** | Pointer to [**[]PackageCodeType**](PackageCodeType.md) | Full Details about each package code | [optional] 
**HotelId** | Pointer to **string** | Hotel code for the packages. | [optional] 

## Methods

### NewHotelPackageCodesType

`func NewHotelPackageCodesType() *HotelPackageCodesType`

NewHotelPackageCodesType instantiates a new HotelPackageCodesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelPackageCodesTypeWithDefaults

`func NewHotelPackageCodesTypeWithDefaults() *HotelPackageCodesType`

NewHotelPackageCodesTypeWithDefaults instantiates a new HotelPackageCodesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPackageCodeShortInfo

`func (o *HotelPackageCodesType) GetPackageCodeShortInfo() []PackageCodeShortInfoType`

GetPackageCodeShortInfo returns the PackageCodeShortInfo field if non-nil, zero value otherwise.

### GetPackageCodeShortInfoOk

`func (o *HotelPackageCodesType) GetPackageCodeShortInfoOk() (*[]PackageCodeShortInfoType, bool)`

GetPackageCodeShortInfoOk returns a tuple with the PackageCodeShortInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageCodeShortInfo

`func (o *HotelPackageCodesType) SetPackageCodeShortInfo(v []PackageCodeShortInfoType)`

SetPackageCodeShortInfo sets PackageCodeShortInfo field to given value.

### HasPackageCodeShortInfo

`func (o *HotelPackageCodesType) HasPackageCodeShortInfo() bool`

HasPackageCodeShortInfo returns a boolean if a field has been set.

### GetPackageCodeInfo

`func (o *HotelPackageCodesType) GetPackageCodeInfo() []PackageCodeType`

GetPackageCodeInfo returns the PackageCodeInfo field if non-nil, zero value otherwise.

### GetPackageCodeInfoOk

`func (o *HotelPackageCodesType) GetPackageCodeInfoOk() (*[]PackageCodeType, bool)`

GetPackageCodeInfoOk returns a tuple with the PackageCodeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageCodeInfo

`func (o *HotelPackageCodesType) SetPackageCodeInfo(v []PackageCodeType)`

SetPackageCodeInfo sets PackageCodeInfo field to given value.

### HasPackageCodeInfo

`func (o *HotelPackageCodesType) HasPackageCodeInfo() bool`

HasPackageCodeInfo returns a boolean if a field has been set.

### GetHotelId

`func (o *HotelPackageCodesType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelPackageCodesType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelPackageCodesType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelPackageCodesType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


