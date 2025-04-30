# RatePlanPackages

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RatePlan** | Pointer to [**GenericHotelCodeCodeType**](GenericHotelCodeCodeType.md) |  | [optional] 
**Packages** | Pointer to [**RatePackagesType**](RatePackagesType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRatePlanPackages

`func NewRatePlanPackages() *RatePlanPackages`

NewRatePlanPackages instantiates a new RatePlanPackages object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanPackagesWithDefaults

`func NewRatePlanPackagesWithDefaults() *RatePlanPackages`

NewRatePlanPackagesWithDefaults instantiates a new RatePlanPackages object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRatePlan

`func (o *RatePlanPackages) GetRatePlan() GenericHotelCodeCodeType`

GetRatePlan returns the RatePlan field if non-nil, zero value otherwise.

### GetRatePlanOk

`func (o *RatePlanPackages) GetRatePlanOk() (*GenericHotelCodeCodeType, bool)`

GetRatePlanOk returns a tuple with the RatePlan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlan

`func (o *RatePlanPackages) SetRatePlan(v GenericHotelCodeCodeType)`

SetRatePlan sets RatePlan field to given value.

### HasRatePlan

`func (o *RatePlanPackages) HasRatePlan() bool`

HasRatePlan returns a boolean if a field has been set.

### GetPackages

`func (o *RatePlanPackages) GetPackages() RatePackagesType`

GetPackages returns the Packages field if non-nil, zero value otherwise.

### GetPackagesOk

`func (o *RatePlanPackages) GetPackagesOk() (*RatePackagesType, bool)`

GetPackagesOk returns a tuple with the Packages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackages

`func (o *RatePlanPackages) SetPackages(v RatePackagesType)`

SetPackages sets Packages field to given value.

### HasPackages

`func (o *RatePlanPackages) HasPackages() bool`

HasPackages returns a boolean if a field has been set.

### GetLinks

`func (o *RatePlanPackages) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RatePlanPackages) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RatePlanPackages) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RatePlanPackages) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RatePlanPackages) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RatePlanPackages) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RatePlanPackages) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RatePlanPackages) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


