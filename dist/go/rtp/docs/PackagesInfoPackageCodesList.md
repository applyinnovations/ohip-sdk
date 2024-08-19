# PackagesInfoPackageCodesList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**PackageCodes** | Pointer to [**[]HotelPackageCodesType**](HotelPackageCodesType.md) | Package Codes of each hotel. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewPackagesInfoPackageCodesList

`func NewPackagesInfoPackageCodesList() *PackagesInfoPackageCodesList`

NewPackagesInfoPackageCodesList instantiates a new PackagesInfoPackageCodesList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPackagesInfoPackageCodesListWithDefaults

`func NewPackagesInfoPackageCodesListWithDefaults() *PackagesInfoPackageCodesList`

NewPackagesInfoPackageCodesListWithDefaults instantiates a new PackagesInfoPackageCodesList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *PackagesInfoPackageCodesList) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *PackagesInfoPackageCodesList) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *PackagesInfoPackageCodesList) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *PackagesInfoPackageCodesList) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *PackagesInfoPackageCodesList) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *PackagesInfoPackageCodesList) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *PackagesInfoPackageCodesList) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *PackagesInfoPackageCodesList) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetPackageCodes

`func (o *PackagesInfoPackageCodesList) GetPackageCodes() []HotelPackageCodesType`

GetPackageCodes returns the PackageCodes field if non-nil, zero value otherwise.

### GetPackageCodesOk

`func (o *PackagesInfoPackageCodesList) GetPackageCodesOk() (*[]HotelPackageCodesType, bool)`

GetPackageCodesOk returns a tuple with the PackageCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageCodes

`func (o *PackagesInfoPackageCodesList) SetPackageCodes(v []HotelPackageCodesType)`

SetPackageCodes sets PackageCodes field to given value.

### HasPackageCodes

`func (o *PackagesInfoPackageCodesList) HasPackageCodes() bool`

HasPackageCodes returns a boolean if a field has been set.

### GetTotalResults

`func (o *PackagesInfoPackageCodesList) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *PackagesInfoPackageCodesList) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *PackagesInfoPackageCodesList) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *PackagesInfoPackageCodesList) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


