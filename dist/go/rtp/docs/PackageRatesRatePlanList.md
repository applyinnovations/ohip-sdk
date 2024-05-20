# PackageRatesRatePlanList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelCode** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**PackageCode** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**RatePlan** | Pointer to [**[]RatePlanShortInfoType**](RatePlanShortInfoType.md) |  | [optional] 

## Methods

### NewPackageRatesRatePlanList

`func NewPackageRatesRatePlanList() *PackageRatesRatePlanList`

NewPackageRatesRatePlanList instantiates a new PackageRatesRatePlanList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPackageRatesRatePlanListWithDefaults

`func NewPackageRatesRatePlanListWithDefaults() *PackageRatesRatePlanList`

NewPackageRatesRatePlanListWithDefaults instantiates a new PackageRatesRatePlanList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelCode

`func (o *PackageRatesRatePlanList) GetHotelCode() string`

GetHotelCode returns the HotelCode field if non-nil, zero value otherwise.

### GetHotelCodeOk

`func (o *PackageRatesRatePlanList) GetHotelCodeOk() (*string, bool)`

GetHotelCodeOk returns a tuple with the HotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCode

`func (o *PackageRatesRatePlanList) SetHotelCode(v string)`

SetHotelCode sets HotelCode field to given value.

### HasHotelCode

`func (o *PackageRatesRatePlanList) HasHotelCode() bool`

HasHotelCode returns a boolean if a field has been set.

### GetPackageCode

`func (o *PackageRatesRatePlanList) GetPackageCode() string`

GetPackageCode returns the PackageCode field if non-nil, zero value otherwise.

### GetPackageCodeOk

`func (o *PackageRatesRatePlanList) GetPackageCodeOk() (*string, bool)`

GetPackageCodeOk returns a tuple with the PackageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageCode

`func (o *PackageRatesRatePlanList) SetPackageCode(v string)`

SetPackageCode sets PackageCode field to given value.

### HasPackageCode

`func (o *PackageRatesRatePlanList) HasPackageCode() bool`

HasPackageCode returns a boolean if a field has been set.

### GetRatePlan

`func (o *PackageRatesRatePlanList) GetRatePlan() []RatePlanShortInfoType`

GetRatePlan returns the RatePlan field if non-nil, zero value otherwise.

### GetRatePlanOk

`func (o *PackageRatesRatePlanList) GetRatePlanOk() (*[]RatePlanShortInfoType, bool)`

GetRatePlanOk returns a tuple with the RatePlan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlan

`func (o *PackageRatesRatePlanList) SetRatePlan(v []RatePlanShortInfoType)`

SetRatePlan sets RatePlan field to given value.

### HasRatePlan

`func (o *PackageRatesRatePlanList) HasRatePlan() bool`

HasRatePlan returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


