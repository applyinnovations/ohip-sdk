# PackageArrangementCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ArrangementId** | Pointer to **float32** | Primay key of arrangement codes | [optional] 
**Code** | Pointer to **string** | Configuration code. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel where the code is configured. | [optional] 
**Inactive** | Pointer to **bool** | Represents whether the package arrangement code is inactive or not | [optional] 
**Revenue** | Pointer to **bool** | specify whether the arrangement postings are classed as revenue. | [optional] 
**TaxTypeCode** | Pointer to **string** | information about the tax type code linked to the folio arrangment Code. | [optional] 

## Methods

### NewPackageArrangementCodeType

`func NewPackageArrangementCodeType() *PackageArrangementCodeType`

NewPackageArrangementCodeType instantiates a new PackageArrangementCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPackageArrangementCodeTypeWithDefaults

`func NewPackageArrangementCodeTypeWithDefaults() *PackageArrangementCodeType`

NewPackageArrangementCodeTypeWithDefaults instantiates a new PackageArrangementCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArrangementId

`func (o *PackageArrangementCodeType) GetArrangementId() float32`

GetArrangementId returns the ArrangementId field if non-nil, zero value otherwise.

### GetArrangementIdOk

`func (o *PackageArrangementCodeType) GetArrangementIdOk() (*float32, bool)`

GetArrangementIdOk returns a tuple with the ArrangementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrangementId

`func (o *PackageArrangementCodeType) SetArrangementId(v float32)`

SetArrangementId sets ArrangementId field to given value.

### HasArrangementId

`func (o *PackageArrangementCodeType) HasArrangementId() bool`

HasArrangementId returns a boolean if a field has been set.

### GetCode

`func (o *PackageArrangementCodeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *PackageArrangementCodeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *PackageArrangementCodeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *PackageArrangementCodeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *PackageArrangementCodeType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PackageArrangementCodeType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PackageArrangementCodeType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PackageArrangementCodeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *PackageArrangementCodeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PackageArrangementCodeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PackageArrangementCodeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PackageArrangementCodeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInactive

`func (o *PackageArrangementCodeType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *PackageArrangementCodeType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *PackageArrangementCodeType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *PackageArrangementCodeType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetRevenue

`func (o *PackageArrangementCodeType) GetRevenue() bool`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *PackageArrangementCodeType) GetRevenueOk() (*bool, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *PackageArrangementCodeType) SetRevenue(v bool)`

SetRevenue sets Revenue field to given value.

### HasRevenue

`func (o *PackageArrangementCodeType) HasRevenue() bool`

HasRevenue returns a boolean if a field has been set.

### GetTaxTypeCode

`func (o *PackageArrangementCodeType) GetTaxTypeCode() string`

GetTaxTypeCode returns the TaxTypeCode field if non-nil, zero value otherwise.

### GetTaxTypeCodeOk

`func (o *PackageArrangementCodeType) GetTaxTypeCodeOk() (*string, bool)`

GetTaxTypeCodeOk returns a tuple with the TaxTypeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxTypeCode

`func (o *PackageArrangementCodeType) SetTaxTypeCode(v string)`

SetTaxTypeCode sets TaxTypeCode field to given value.

### HasTaxTypeCode

`func (o *PackageArrangementCodeType) HasTaxTypeCode() bool`

HasTaxTypeCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


