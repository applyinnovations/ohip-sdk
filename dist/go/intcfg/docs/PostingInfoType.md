# PostingInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReferenceField** | Pointer to **string** | Reference field of postings setup. | [optional] 
**ChargeScaling** | Pointer to **string** | Charge scaling of postings setup. | [optional] 
**ZeroChargePostings** | Pointer to **string** | Zero charge posting of postings setup. | [optional] 
**Postings** | Pointer to **string** | Postings of postings setup. | [optional] 
**PostType** | Pointer to **string** | Post type of postings setup. | [optional] 
**Conversion** | Pointer to **int32** | Conversion of postings setup. | [optional] 
**Reference** | Pointer to **string** | Reference of postings setup. | [optional] 
**Supplement** | Pointer to **string** | Supplement of postings setup. | [optional] 
**OverrideCreditLimit** | Pointer to **bool** | Override credit limit of postings setup. | [optional] 
**NoPostFlag** | Pointer to **bool** | No post flag of postings setup. | [optional] 
**GeneratesTax** | Pointer to **bool** | IFC generate tax of postings setup. | [optional] 
**DialedNumberMasking** | Pointer to [**MaskDialNumberType**](MaskDialNumberType.md) |  | [optional] 
**ArticleNoPrefix** | Pointer to **bool** | Article Prefix of postings setup. | [optional] 

## Methods

### NewPostingInfoType

`func NewPostingInfoType() *PostingInfoType`

NewPostingInfoType instantiates a new PostingInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostingInfoTypeWithDefaults

`func NewPostingInfoTypeWithDefaults() *PostingInfoType`

NewPostingInfoTypeWithDefaults instantiates a new PostingInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReferenceField

`func (o *PostingInfoType) GetReferenceField() string`

GetReferenceField returns the ReferenceField field if non-nil, zero value otherwise.

### GetReferenceFieldOk

`func (o *PostingInfoType) GetReferenceFieldOk() (*string, bool)`

GetReferenceFieldOk returns a tuple with the ReferenceField field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceField

`func (o *PostingInfoType) SetReferenceField(v string)`

SetReferenceField sets ReferenceField field to given value.

### HasReferenceField

`func (o *PostingInfoType) HasReferenceField() bool`

HasReferenceField returns a boolean if a field has been set.

### GetChargeScaling

`func (o *PostingInfoType) GetChargeScaling() string`

GetChargeScaling returns the ChargeScaling field if non-nil, zero value otherwise.

### GetChargeScalingOk

`func (o *PostingInfoType) GetChargeScalingOk() (*string, bool)`

GetChargeScalingOk returns a tuple with the ChargeScaling field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChargeScaling

`func (o *PostingInfoType) SetChargeScaling(v string)`

SetChargeScaling sets ChargeScaling field to given value.

### HasChargeScaling

`func (o *PostingInfoType) HasChargeScaling() bool`

HasChargeScaling returns a boolean if a field has been set.

### GetZeroChargePostings

`func (o *PostingInfoType) GetZeroChargePostings() string`

GetZeroChargePostings returns the ZeroChargePostings field if non-nil, zero value otherwise.

### GetZeroChargePostingsOk

`func (o *PostingInfoType) GetZeroChargePostingsOk() (*string, bool)`

GetZeroChargePostingsOk returns a tuple with the ZeroChargePostings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetZeroChargePostings

`func (o *PostingInfoType) SetZeroChargePostings(v string)`

SetZeroChargePostings sets ZeroChargePostings field to given value.

### HasZeroChargePostings

`func (o *PostingInfoType) HasZeroChargePostings() bool`

HasZeroChargePostings returns a boolean if a field has been set.

### GetPostings

`func (o *PostingInfoType) GetPostings() string`

GetPostings returns the Postings field if non-nil, zero value otherwise.

### GetPostingsOk

`func (o *PostingInfoType) GetPostingsOk() (*string, bool)`

GetPostingsOk returns a tuple with the Postings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostings

`func (o *PostingInfoType) SetPostings(v string)`

SetPostings sets Postings field to given value.

### HasPostings

`func (o *PostingInfoType) HasPostings() bool`

HasPostings returns a boolean if a field has been set.

### GetPostType

`func (o *PostingInfoType) GetPostType() string`

GetPostType returns the PostType field if non-nil, zero value otherwise.

### GetPostTypeOk

`func (o *PostingInfoType) GetPostTypeOk() (*string, bool)`

GetPostTypeOk returns a tuple with the PostType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostType

`func (o *PostingInfoType) SetPostType(v string)`

SetPostType sets PostType field to given value.

### HasPostType

`func (o *PostingInfoType) HasPostType() bool`

HasPostType returns a boolean if a field has been set.

### GetConversion

`func (o *PostingInfoType) GetConversion() int32`

GetConversion returns the Conversion field if non-nil, zero value otherwise.

### GetConversionOk

`func (o *PostingInfoType) GetConversionOk() (*int32, bool)`

GetConversionOk returns a tuple with the Conversion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConversion

`func (o *PostingInfoType) SetConversion(v int32)`

SetConversion sets Conversion field to given value.

### HasConversion

`func (o *PostingInfoType) HasConversion() bool`

HasConversion returns a boolean if a field has been set.

### GetReference

`func (o *PostingInfoType) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *PostingInfoType) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *PostingInfoType) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *PostingInfoType) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetSupplement

`func (o *PostingInfoType) GetSupplement() string`

GetSupplement returns the Supplement field if non-nil, zero value otherwise.

### GetSupplementOk

`func (o *PostingInfoType) GetSupplementOk() (*string, bool)`

GetSupplementOk returns a tuple with the Supplement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupplement

`func (o *PostingInfoType) SetSupplement(v string)`

SetSupplement sets Supplement field to given value.

### HasSupplement

`func (o *PostingInfoType) HasSupplement() bool`

HasSupplement returns a boolean if a field has been set.

### GetOverrideCreditLimit

`func (o *PostingInfoType) GetOverrideCreditLimit() bool`

GetOverrideCreditLimit returns the OverrideCreditLimit field if non-nil, zero value otherwise.

### GetOverrideCreditLimitOk

`func (o *PostingInfoType) GetOverrideCreditLimitOk() (*bool, bool)`

GetOverrideCreditLimitOk returns a tuple with the OverrideCreditLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideCreditLimit

`func (o *PostingInfoType) SetOverrideCreditLimit(v bool)`

SetOverrideCreditLimit sets OverrideCreditLimit field to given value.

### HasOverrideCreditLimit

`func (o *PostingInfoType) HasOverrideCreditLimit() bool`

HasOverrideCreditLimit returns a boolean if a field has been set.

### GetNoPostFlag

`func (o *PostingInfoType) GetNoPostFlag() bool`

GetNoPostFlag returns the NoPostFlag field if non-nil, zero value otherwise.

### GetNoPostFlagOk

`func (o *PostingInfoType) GetNoPostFlagOk() (*bool, bool)`

GetNoPostFlagOk returns a tuple with the NoPostFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoPostFlag

`func (o *PostingInfoType) SetNoPostFlag(v bool)`

SetNoPostFlag sets NoPostFlag field to given value.

### HasNoPostFlag

`func (o *PostingInfoType) HasNoPostFlag() bool`

HasNoPostFlag returns a boolean if a field has been set.

### GetGeneratesTax

`func (o *PostingInfoType) GetGeneratesTax() bool`

GetGeneratesTax returns the GeneratesTax field if non-nil, zero value otherwise.

### GetGeneratesTaxOk

`func (o *PostingInfoType) GetGeneratesTaxOk() (*bool, bool)`

GetGeneratesTaxOk returns a tuple with the GeneratesTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratesTax

`func (o *PostingInfoType) SetGeneratesTax(v bool)`

SetGeneratesTax sets GeneratesTax field to given value.

### HasGeneratesTax

`func (o *PostingInfoType) HasGeneratesTax() bool`

HasGeneratesTax returns a boolean if a field has been set.

### GetDialedNumberMasking

`func (o *PostingInfoType) GetDialedNumberMasking() MaskDialNumberType`

GetDialedNumberMasking returns the DialedNumberMasking field if non-nil, zero value otherwise.

### GetDialedNumberMaskingOk

`func (o *PostingInfoType) GetDialedNumberMaskingOk() (*MaskDialNumberType, bool)`

GetDialedNumberMaskingOk returns a tuple with the DialedNumberMasking field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDialedNumberMasking

`func (o *PostingInfoType) SetDialedNumberMasking(v MaskDialNumberType)`

SetDialedNumberMasking sets DialedNumberMasking field to given value.

### HasDialedNumberMasking

`func (o *PostingInfoType) HasDialedNumberMasking() bool`

HasDialedNumberMasking returns a boolean if a field has been set.

### GetArticleNoPrefix

`func (o *PostingInfoType) GetArticleNoPrefix() bool`

GetArticleNoPrefix returns the ArticleNoPrefix field if non-nil, zero value otherwise.

### GetArticleNoPrefixOk

`func (o *PostingInfoType) GetArticleNoPrefixOk() (*bool, bool)`

GetArticleNoPrefixOk returns a tuple with the ArticleNoPrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticleNoPrefix

`func (o *PostingInfoType) SetArticleNoPrefix(v bool)`

SetArticleNoPrefix sets ArticleNoPrefix field to given value.

### HasArticleNoPrefix

`func (o *PostingInfoType) HasArticleNoPrefix() bool`

HasArticleNoPrefix returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


