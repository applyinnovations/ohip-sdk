# PackageFormulaRangeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code. | [optional] 
**TaxRangeType** | Pointer to **string** | Tax Range Type. | [optional] 
**AmountFrom** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**AmountTo** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TaxAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**IntervalAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PkgFormulaRangeId** | Pointer to **int32** | Package Formula Range Id. | [optional] 

## Methods

### NewPackageFormulaRangeType

`func NewPackageFormulaRangeType() *PackageFormulaRangeType`

NewPackageFormulaRangeType instantiates a new PackageFormulaRangeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPackageFormulaRangeTypeWithDefaults

`func NewPackageFormulaRangeTypeWithDefaults() *PackageFormulaRangeType`

NewPackageFormulaRangeTypeWithDefaults instantiates a new PackageFormulaRangeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PackageFormulaRangeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PackageFormulaRangeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PackageFormulaRangeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PackageFormulaRangeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTaxRangeType

`func (o *PackageFormulaRangeType) GetTaxRangeType() string`

GetTaxRangeType returns the TaxRangeType field if non-nil, zero value otherwise.

### GetTaxRangeTypeOk

`func (o *PackageFormulaRangeType) GetTaxRangeTypeOk() (*string, bool)`

GetTaxRangeTypeOk returns a tuple with the TaxRangeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxRangeType

`func (o *PackageFormulaRangeType) SetTaxRangeType(v string)`

SetTaxRangeType sets TaxRangeType field to given value.

### HasTaxRangeType

`func (o *PackageFormulaRangeType) HasTaxRangeType() bool`

HasTaxRangeType returns a boolean if a field has been set.

### GetAmountFrom

`func (o *PackageFormulaRangeType) GetAmountFrom() CurrencyAmountType`

GetAmountFrom returns the AmountFrom field if non-nil, zero value otherwise.

### GetAmountFromOk

`func (o *PackageFormulaRangeType) GetAmountFromOk() (*CurrencyAmountType, bool)`

GetAmountFromOk returns a tuple with the AmountFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountFrom

`func (o *PackageFormulaRangeType) SetAmountFrom(v CurrencyAmountType)`

SetAmountFrom sets AmountFrom field to given value.

### HasAmountFrom

`func (o *PackageFormulaRangeType) HasAmountFrom() bool`

HasAmountFrom returns a boolean if a field has been set.

### GetAmountTo

`func (o *PackageFormulaRangeType) GetAmountTo() CurrencyAmountType`

GetAmountTo returns the AmountTo field if non-nil, zero value otherwise.

### GetAmountToOk

`func (o *PackageFormulaRangeType) GetAmountToOk() (*CurrencyAmountType, bool)`

GetAmountToOk returns a tuple with the AmountTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountTo

`func (o *PackageFormulaRangeType) SetAmountTo(v CurrencyAmountType)`

SetAmountTo sets AmountTo field to given value.

### HasAmountTo

`func (o *PackageFormulaRangeType) HasAmountTo() bool`

HasAmountTo returns a boolean if a field has been set.

### GetTaxAmount

`func (o *PackageFormulaRangeType) GetTaxAmount() CurrencyAmountType`

GetTaxAmount returns the TaxAmount field if non-nil, zero value otherwise.

### GetTaxAmountOk

`func (o *PackageFormulaRangeType) GetTaxAmountOk() (*CurrencyAmountType, bool)`

GetTaxAmountOk returns a tuple with the TaxAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxAmount

`func (o *PackageFormulaRangeType) SetTaxAmount(v CurrencyAmountType)`

SetTaxAmount sets TaxAmount field to given value.

### HasTaxAmount

`func (o *PackageFormulaRangeType) HasTaxAmount() bool`

HasTaxAmount returns a boolean if a field has been set.

### GetIntervalAmount

`func (o *PackageFormulaRangeType) GetIntervalAmount() CurrencyAmountType`

GetIntervalAmount returns the IntervalAmount field if non-nil, zero value otherwise.

### GetIntervalAmountOk

`func (o *PackageFormulaRangeType) GetIntervalAmountOk() (*CurrencyAmountType, bool)`

GetIntervalAmountOk returns a tuple with the IntervalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntervalAmount

`func (o *PackageFormulaRangeType) SetIntervalAmount(v CurrencyAmountType)`

SetIntervalAmount sets IntervalAmount field to given value.

### HasIntervalAmount

`func (o *PackageFormulaRangeType) HasIntervalAmount() bool`

HasIntervalAmount returns a boolean if a field has been set.

### GetPkgFormulaRangeId

`func (o *PackageFormulaRangeType) GetPkgFormulaRangeId() int32`

GetPkgFormulaRangeId returns the PkgFormulaRangeId field if non-nil, zero value otherwise.

### GetPkgFormulaRangeIdOk

`func (o *PackageFormulaRangeType) GetPkgFormulaRangeIdOk() (*int32, bool)`

GetPkgFormulaRangeIdOk returns a tuple with the PkgFormulaRangeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPkgFormulaRangeId

`func (o *PackageFormulaRangeType) SetPkgFormulaRangeId(v int32)`

SetPkgFormulaRangeId sets PkgFormulaRangeId field to given value.

### HasPkgFormulaRangeId

`func (o *PackageFormulaRangeType) HasPkgFormulaRangeId() bool`

HasPkgFormulaRangeId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


