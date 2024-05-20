# ECertificateInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AwardCode** | Pointer to **string** | Award type to which the certificate is linked to. | [optional] 
**BenefitSummary** | Pointer to **string** | Summary of Benefits attached to this ECertificate. | [optional] 
**CertificateType** | Pointer to **string** | User defined certificate code. | [optional] 
**Cost** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Description** | Pointer to **string** | Description about the certificate. | [optional] 
**Hotels** | Pointer to [**ECertificateInfoTypeHotels**](ECertificateInfoTypeHotels.md) |  | [optional] 
**Label** | Pointer to **string** | Label for the certificate. | [optional] 
**LongDescription** | Pointer to **string** | Detail description about the certificate. | [optional] 
**MembershipType** | Pointer to **string** | Membership type to which the certificate is linked to. | [optional] 
**PromotionCode** | Pointer to **string** | Promotion code to which certificate is attached to. | [optional] 
**Value** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**VoucherBenefitCode** | Pointer to **string** | Voucher benefit code attached to the certificate. | [optional] 

## Methods

### NewECertificateInfoType

`func NewECertificateInfoType() *ECertificateInfoType`

NewECertificateInfoType instantiates a new ECertificateInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewECertificateInfoTypeWithDefaults

`func NewECertificateInfoTypeWithDefaults() *ECertificateInfoType`

NewECertificateInfoTypeWithDefaults instantiates a new ECertificateInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAwardCode

`func (o *ECertificateInfoType) GetAwardCode() string`

GetAwardCode returns the AwardCode field if non-nil, zero value otherwise.

### GetAwardCodeOk

`func (o *ECertificateInfoType) GetAwardCodeOk() (*string, bool)`

GetAwardCodeOk returns a tuple with the AwardCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardCode

`func (o *ECertificateInfoType) SetAwardCode(v string)`

SetAwardCode sets AwardCode field to given value.

### HasAwardCode

`func (o *ECertificateInfoType) HasAwardCode() bool`

HasAwardCode returns a boolean if a field has been set.

### GetBenefitSummary

`func (o *ECertificateInfoType) GetBenefitSummary() string`

GetBenefitSummary returns the BenefitSummary field if non-nil, zero value otherwise.

### GetBenefitSummaryOk

`func (o *ECertificateInfoType) GetBenefitSummaryOk() (*string, bool)`

GetBenefitSummaryOk returns a tuple with the BenefitSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBenefitSummary

`func (o *ECertificateInfoType) SetBenefitSummary(v string)`

SetBenefitSummary sets BenefitSummary field to given value.

### HasBenefitSummary

`func (o *ECertificateInfoType) HasBenefitSummary() bool`

HasBenefitSummary returns a boolean if a field has been set.

### GetCertificateType

`func (o *ECertificateInfoType) GetCertificateType() string`

GetCertificateType returns the CertificateType field if non-nil, zero value otherwise.

### GetCertificateTypeOk

`func (o *ECertificateInfoType) GetCertificateTypeOk() (*string, bool)`

GetCertificateTypeOk returns a tuple with the CertificateType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateType

`func (o *ECertificateInfoType) SetCertificateType(v string)`

SetCertificateType sets CertificateType field to given value.

### HasCertificateType

`func (o *ECertificateInfoType) HasCertificateType() bool`

HasCertificateType returns a boolean if a field has been set.

### GetCost

`func (o *ECertificateInfoType) GetCost() CurrencyAmountType`

GetCost returns the Cost field if non-nil, zero value otherwise.

### GetCostOk

`func (o *ECertificateInfoType) GetCostOk() (*CurrencyAmountType, bool)`

GetCostOk returns a tuple with the Cost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCost

`func (o *ECertificateInfoType) SetCost(v CurrencyAmountType)`

SetCost sets Cost field to given value.

### HasCost

`func (o *ECertificateInfoType) HasCost() bool`

HasCost returns a boolean if a field has been set.

### GetDescription

`func (o *ECertificateInfoType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ECertificateInfoType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ECertificateInfoType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ECertificateInfoType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotels

`func (o *ECertificateInfoType) GetHotels() ECertificateInfoTypeHotels`

GetHotels returns the Hotels field if non-nil, zero value otherwise.

### GetHotelsOk

`func (o *ECertificateInfoType) GetHotelsOk() (*ECertificateInfoTypeHotels, bool)`

GetHotelsOk returns a tuple with the Hotels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotels

`func (o *ECertificateInfoType) SetHotels(v ECertificateInfoTypeHotels)`

SetHotels sets Hotels field to given value.

### HasHotels

`func (o *ECertificateInfoType) HasHotels() bool`

HasHotels returns a boolean if a field has been set.

### GetLabel

`func (o *ECertificateInfoType) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *ECertificateInfoType) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *ECertificateInfoType) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *ECertificateInfoType) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetLongDescription

`func (o *ECertificateInfoType) GetLongDescription() string`

GetLongDescription returns the LongDescription field if non-nil, zero value otherwise.

### GetLongDescriptionOk

`func (o *ECertificateInfoType) GetLongDescriptionOk() (*string, bool)`

GetLongDescriptionOk returns a tuple with the LongDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLongDescription

`func (o *ECertificateInfoType) SetLongDescription(v string)`

SetLongDescription sets LongDescription field to given value.

### HasLongDescription

`func (o *ECertificateInfoType) HasLongDescription() bool`

HasLongDescription returns a boolean if a field has been set.

### GetMembershipType

`func (o *ECertificateInfoType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *ECertificateInfoType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *ECertificateInfoType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *ECertificateInfoType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetPromotionCode

`func (o *ECertificateInfoType) GetPromotionCode() string`

GetPromotionCode returns the PromotionCode field if non-nil, zero value otherwise.

### GetPromotionCodeOk

`func (o *ECertificateInfoType) GetPromotionCodeOk() (*string, bool)`

GetPromotionCodeOk returns a tuple with the PromotionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionCode

`func (o *ECertificateInfoType) SetPromotionCode(v string)`

SetPromotionCode sets PromotionCode field to given value.

### HasPromotionCode

`func (o *ECertificateInfoType) HasPromotionCode() bool`

HasPromotionCode returns a boolean if a field has been set.

### GetValue

`func (o *ECertificateInfoType) GetValue() CurrencyAmountType`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ECertificateInfoType) GetValueOk() (*CurrencyAmountType, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ECertificateInfoType) SetValue(v CurrencyAmountType)`

SetValue sets Value field to given value.

### HasValue

`func (o *ECertificateInfoType) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetVoucherBenefitCode

`func (o *ECertificateInfoType) GetVoucherBenefitCode() string`

GetVoucherBenefitCode returns the VoucherBenefitCode field if non-nil, zero value otherwise.

### GetVoucherBenefitCodeOk

`func (o *ECertificateInfoType) GetVoucherBenefitCodeOk() (*string, bool)`

GetVoucherBenefitCodeOk returns a tuple with the VoucherBenefitCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVoucherBenefitCode

`func (o *ECertificateInfoType) SetVoucherBenefitCode(v string)`

SetVoucherBenefitCode sets VoucherBenefitCode field to given value.

### HasVoucherBenefitCode

`func (o *ECertificateInfoType) HasVoucherBenefitCode() bool`

HasVoucherBenefitCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


