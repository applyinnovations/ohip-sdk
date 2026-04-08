# PackageConsumptionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DefaultQuantity** | Pointer to **int32** | Quantity of packages to be attached i.e. the multiplier to be applied against the calculation rule to determine the total quantity of the packages. | [optional] 
**ExcludedQuantity** | Pointer to **int32** | The quantity which has been excluded in the package. | [optional] 
**TotalQuantity** | Pointer to **int32** | The total quantity of the package, calculated based on the calculation rule as defined in the PackageHeaderType and defaultQuantity. | [optional] 
**AllowanceConsumed** | Pointer to **bool** | Indicates if Allowance(for POS packages) has been consumed/posted for today. | [optional] 

## Methods

### NewPackageConsumptionType

`func NewPackageConsumptionType() *PackageConsumptionType`

NewPackageConsumptionType instantiates a new PackageConsumptionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPackageConsumptionTypeWithDefaults

`func NewPackageConsumptionTypeWithDefaults() *PackageConsumptionType`

NewPackageConsumptionTypeWithDefaults instantiates a new PackageConsumptionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDefaultQuantity

`func (o *PackageConsumptionType) GetDefaultQuantity() int32`

GetDefaultQuantity returns the DefaultQuantity field if non-nil, zero value otherwise.

### GetDefaultQuantityOk

`func (o *PackageConsumptionType) GetDefaultQuantityOk() (*int32, bool)`

GetDefaultQuantityOk returns a tuple with the DefaultQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultQuantity

`func (o *PackageConsumptionType) SetDefaultQuantity(v int32)`

SetDefaultQuantity sets DefaultQuantity field to given value.

### HasDefaultQuantity

`func (o *PackageConsumptionType) HasDefaultQuantity() bool`

HasDefaultQuantity returns a boolean if a field has been set.

### GetExcludedQuantity

`func (o *PackageConsumptionType) GetExcludedQuantity() int32`

GetExcludedQuantity returns the ExcludedQuantity field if non-nil, zero value otherwise.

### GetExcludedQuantityOk

`func (o *PackageConsumptionType) GetExcludedQuantityOk() (*int32, bool)`

GetExcludedQuantityOk returns a tuple with the ExcludedQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludedQuantity

`func (o *PackageConsumptionType) SetExcludedQuantity(v int32)`

SetExcludedQuantity sets ExcludedQuantity field to given value.

### HasExcludedQuantity

`func (o *PackageConsumptionType) HasExcludedQuantity() bool`

HasExcludedQuantity returns a boolean if a field has been set.

### GetTotalQuantity

`func (o *PackageConsumptionType) GetTotalQuantity() int32`

GetTotalQuantity returns the TotalQuantity field if non-nil, zero value otherwise.

### GetTotalQuantityOk

`func (o *PackageConsumptionType) GetTotalQuantityOk() (*int32, bool)`

GetTotalQuantityOk returns a tuple with the TotalQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalQuantity

`func (o *PackageConsumptionType) SetTotalQuantity(v int32)`

SetTotalQuantity sets TotalQuantity field to given value.

### HasTotalQuantity

`func (o *PackageConsumptionType) HasTotalQuantity() bool`

HasTotalQuantity returns a boolean if a field has been set.

### GetAllowanceConsumed

`func (o *PackageConsumptionType) GetAllowanceConsumed() bool`

GetAllowanceConsumed returns the AllowanceConsumed field if non-nil, zero value otherwise.

### GetAllowanceConsumedOk

`func (o *PackageConsumptionType) GetAllowanceConsumedOk() (*bool, bool)`

GetAllowanceConsumedOk returns a tuple with the AllowanceConsumed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowanceConsumed

`func (o *PackageConsumptionType) SetAllowanceConsumed(v bool)`

SetAllowanceConsumed sets AllowanceConsumed field to given value.

### HasAllowanceConsumed

`func (o *PackageConsumptionType) HasAllowanceConsumed() bool`

HasAllowanceConsumed returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


