# RatePlanTransactionDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioText** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**TransactionCode** | Pointer to **string** | Transaction code used by the rate plan. | [optional] 
**RoomTransactionCodes** | Pointer to [**[]RatePlanRoomTransactionCodeType**](RatePlanRoomTransactionCodeType.md) | Single transaction code and room type/class association. | [optional] 
**PackageTransactionCode** | Pointer to **string** | Package Transaction code used by the rate plan. | [optional] 
**CurrencyCode** | Pointer to **string** | Currency code used by the rate plan. | [optional] 
**RateIncludesTax** | Pointer to **bool** | Is tax included in the rate plan? | [optional] 
**ExchangePosting** | Pointer to [**ExchangePostingType**](ExchangePostingType.md) |  | [optional] 
**PostingRhythm** | Pointer to [**RatePlanPostingRhythmType**](RatePlanPostingRhythmType.md) |  | [optional] 
**AdvancedPostingRhythms** | Pointer to [**[]RatePlanAdvancedPostingRhythmType**](RatePlanAdvancedPostingRhythmType.md) | Posting rhythm details for a rate plan containing Buy x Get y functionality. | [optional] 

## Methods

### NewRatePlanTransactionDetailsType

`func NewRatePlanTransactionDetailsType() *RatePlanTransactionDetailsType`

NewRatePlanTransactionDetailsType instantiates a new RatePlanTransactionDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanTransactionDetailsTypeWithDefaults

`func NewRatePlanTransactionDetailsTypeWithDefaults() *RatePlanTransactionDetailsType`

NewRatePlanTransactionDetailsTypeWithDefaults instantiates a new RatePlanTransactionDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioText

`func (o *RatePlanTransactionDetailsType) GetFolioText() TranslationTextType2000`

GetFolioText returns the FolioText field if non-nil, zero value otherwise.

### GetFolioTextOk

`func (o *RatePlanTransactionDetailsType) GetFolioTextOk() (*TranslationTextType2000, bool)`

GetFolioTextOk returns a tuple with the FolioText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioText

`func (o *RatePlanTransactionDetailsType) SetFolioText(v TranslationTextType2000)`

SetFolioText sets FolioText field to given value.

### HasFolioText

`func (o *RatePlanTransactionDetailsType) HasFolioText() bool`

HasFolioText returns a boolean if a field has been set.

### GetTransactionCode

`func (o *RatePlanTransactionDetailsType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *RatePlanTransactionDetailsType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *RatePlanTransactionDetailsType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *RatePlanTransactionDetailsType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetRoomTransactionCodes

`func (o *RatePlanTransactionDetailsType) GetRoomTransactionCodes() []RatePlanRoomTransactionCodeType`

GetRoomTransactionCodes returns the RoomTransactionCodes field if non-nil, zero value otherwise.

### GetRoomTransactionCodesOk

`func (o *RatePlanTransactionDetailsType) GetRoomTransactionCodesOk() (*[]RatePlanRoomTransactionCodeType, bool)`

GetRoomTransactionCodesOk returns a tuple with the RoomTransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTransactionCodes

`func (o *RatePlanTransactionDetailsType) SetRoomTransactionCodes(v []RatePlanRoomTransactionCodeType)`

SetRoomTransactionCodes sets RoomTransactionCodes field to given value.

### HasRoomTransactionCodes

`func (o *RatePlanTransactionDetailsType) HasRoomTransactionCodes() bool`

HasRoomTransactionCodes returns a boolean if a field has been set.

### GetPackageTransactionCode

`func (o *RatePlanTransactionDetailsType) GetPackageTransactionCode() string`

GetPackageTransactionCode returns the PackageTransactionCode field if non-nil, zero value otherwise.

### GetPackageTransactionCodeOk

`func (o *RatePlanTransactionDetailsType) GetPackageTransactionCodeOk() (*string, bool)`

GetPackageTransactionCodeOk returns a tuple with the PackageTransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageTransactionCode

`func (o *RatePlanTransactionDetailsType) SetPackageTransactionCode(v string)`

SetPackageTransactionCode sets PackageTransactionCode field to given value.

### HasPackageTransactionCode

`func (o *RatePlanTransactionDetailsType) HasPackageTransactionCode() bool`

HasPackageTransactionCode returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *RatePlanTransactionDetailsType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *RatePlanTransactionDetailsType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *RatePlanTransactionDetailsType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *RatePlanTransactionDetailsType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetRateIncludesTax

`func (o *RatePlanTransactionDetailsType) GetRateIncludesTax() bool`

GetRateIncludesTax returns the RateIncludesTax field if non-nil, zero value otherwise.

### GetRateIncludesTaxOk

`func (o *RatePlanTransactionDetailsType) GetRateIncludesTaxOk() (*bool, bool)`

GetRateIncludesTaxOk returns a tuple with the RateIncludesTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateIncludesTax

`func (o *RatePlanTransactionDetailsType) SetRateIncludesTax(v bool)`

SetRateIncludesTax sets RateIncludesTax field to given value.

### HasRateIncludesTax

`func (o *RatePlanTransactionDetailsType) HasRateIncludesTax() bool`

HasRateIncludesTax returns a boolean if a field has been set.

### GetExchangePosting

`func (o *RatePlanTransactionDetailsType) GetExchangePosting() ExchangePostingType`

GetExchangePosting returns the ExchangePosting field if non-nil, zero value otherwise.

### GetExchangePostingOk

`func (o *RatePlanTransactionDetailsType) GetExchangePostingOk() (*ExchangePostingType, bool)`

GetExchangePostingOk returns a tuple with the ExchangePosting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangePosting

`func (o *RatePlanTransactionDetailsType) SetExchangePosting(v ExchangePostingType)`

SetExchangePosting sets ExchangePosting field to given value.

### HasExchangePosting

`func (o *RatePlanTransactionDetailsType) HasExchangePosting() bool`

HasExchangePosting returns a boolean if a field has been set.

### GetPostingRhythm

`func (o *RatePlanTransactionDetailsType) GetPostingRhythm() RatePlanPostingRhythmType`

GetPostingRhythm returns the PostingRhythm field if non-nil, zero value otherwise.

### GetPostingRhythmOk

`func (o *RatePlanTransactionDetailsType) GetPostingRhythmOk() (*RatePlanPostingRhythmType, bool)`

GetPostingRhythmOk returns a tuple with the PostingRhythm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingRhythm

`func (o *RatePlanTransactionDetailsType) SetPostingRhythm(v RatePlanPostingRhythmType)`

SetPostingRhythm sets PostingRhythm field to given value.

### HasPostingRhythm

`func (o *RatePlanTransactionDetailsType) HasPostingRhythm() bool`

HasPostingRhythm returns a boolean if a field has been set.

### GetAdvancedPostingRhythms

`func (o *RatePlanTransactionDetailsType) GetAdvancedPostingRhythms() []RatePlanAdvancedPostingRhythmType`

GetAdvancedPostingRhythms returns the AdvancedPostingRhythms field if non-nil, zero value otherwise.

### GetAdvancedPostingRhythmsOk

`func (o *RatePlanTransactionDetailsType) GetAdvancedPostingRhythmsOk() (*[]RatePlanAdvancedPostingRhythmType, bool)`

GetAdvancedPostingRhythmsOk returns a tuple with the AdvancedPostingRhythms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvancedPostingRhythms

`func (o *RatePlanTransactionDetailsType) SetAdvancedPostingRhythms(v []RatePlanAdvancedPostingRhythmType)`

SetAdvancedPostingRhythms sets AdvancedPostingRhythms field to given value.

### HasAdvancedPostingRhythms

`func (o *RatePlanTransactionDetailsType) HasAdvancedPostingRhythms() bool`

HasAdvancedPostingRhythms returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


