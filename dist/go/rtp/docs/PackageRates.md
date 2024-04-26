# PackageRates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MasterInfoList** | Pointer to [**[]MasterInfoType**](MasterInfoType.md) | Refer to Generic common types document. | [optional] 
**RatePlanList** | Pointer to [**PackageRatesRatePlanList**](PackageRatesRatePlanList.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPackageRates

`func NewPackageRates() *PackageRates`

NewPackageRates instantiates a new PackageRates object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPackageRatesWithDefaults

`func NewPackageRatesWithDefaults() *PackageRates`

NewPackageRatesWithDefaults instantiates a new PackageRates object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PackageRates) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PackageRates) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PackageRates) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PackageRates) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMasterInfoList

`func (o *PackageRates) GetMasterInfoList() []MasterInfoType`

GetMasterInfoList returns the MasterInfoList field if non-nil, zero value otherwise.

### GetMasterInfoListOk

`func (o *PackageRates) GetMasterInfoListOk() (*[]MasterInfoType, bool)`

GetMasterInfoListOk returns a tuple with the MasterInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfoList

`func (o *PackageRates) SetMasterInfoList(v []MasterInfoType)`

SetMasterInfoList sets MasterInfoList field to given value.

### HasMasterInfoList

`func (o *PackageRates) HasMasterInfoList() bool`

HasMasterInfoList returns a boolean if a field has been set.

### GetRatePlanList

`func (o *PackageRates) GetRatePlanList() PackageRatesRatePlanList`

GetRatePlanList returns the RatePlanList field if non-nil, zero value otherwise.

### GetRatePlanListOk

`func (o *PackageRates) GetRatePlanListOk() (*PackageRatesRatePlanList, bool)`

GetRatePlanListOk returns a tuple with the RatePlanList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanList

`func (o *PackageRates) SetRatePlanList(v PackageRatesRatePlanList)`

SetRatePlanList sets RatePlanList field to given value.

### HasRatePlanList

`func (o *PackageRates) HasRatePlanList() bool`

HasRatePlanList returns a boolean if a field has been set.

### GetWarnings

`func (o *PackageRates) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PackageRates) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PackageRates) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PackageRates) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


