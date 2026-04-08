# ChannelRatesAccessMain

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Unique ID that identifies a single hotel property. | [optional] 
**ChannelCode** | Pointer to **string** |  | [optional] 
**ChannelRatePlanCode** | Pointer to **string** |  | [optional] 
**StartDate** | Pointer to **string** | ISO 8601 date Format &#39;YYYY-MM-DD&#39; | [optional] 
**EndDate** | Pointer to **string** | ISO 8601 date Format &#39;YYYY-MM-DD&#39; | [optional] 
**RateAccessCode** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] 
**AccountId** | Pointer to **string** | Id of the profile account | [optional] 
**AccountName** | Pointer to **string** | Name of the profile account | [optional] 
**ProfileAccountType** | Pointer to [**AccountTypeEnum**](AccountTypeEnum.md) |  | [optional] 
**ProfileId** | Pointer to **string** | Profile Id for which Channel Rate access code is applicable for. | [optional] 

## Methods

### NewChannelRatesAccessMain

`func NewChannelRatesAccessMain() *ChannelRatesAccessMain`

NewChannelRatesAccessMain instantiates a new ChannelRatesAccessMain object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelRatesAccessMainWithDefaults

`func NewChannelRatesAccessMainWithDefaults() *ChannelRatesAccessMain`

NewChannelRatesAccessMainWithDefaults instantiates a new ChannelRatesAccessMain object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ChannelRatesAccessMain) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChannelRatesAccessMain) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChannelRatesAccessMain) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChannelRatesAccessMain) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetChannelCode

`func (o *ChannelRatesAccessMain) GetChannelCode() string`

GetChannelCode returns the ChannelCode field if non-nil, zero value otherwise.

### GetChannelCodeOk

`func (o *ChannelRatesAccessMain) GetChannelCodeOk() (*string, bool)`

GetChannelCodeOk returns a tuple with the ChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelCode

`func (o *ChannelRatesAccessMain) SetChannelCode(v string)`

SetChannelCode sets ChannelCode field to given value.

### HasChannelCode

`func (o *ChannelRatesAccessMain) HasChannelCode() bool`

HasChannelCode returns a boolean if a field has been set.

### GetChannelRatePlanCode

`func (o *ChannelRatesAccessMain) GetChannelRatePlanCode() string`

GetChannelRatePlanCode returns the ChannelRatePlanCode field if non-nil, zero value otherwise.

### GetChannelRatePlanCodeOk

`func (o *ChannelRatesAccessMain) GetChannelRatePlanCodeOk() (*string, bool)`

GetChannelRatePlanCodeOk returns a tuple with the ChannelRatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRatePlanCode

`func (o *ChannelRatesAccessMain) SetChannelRatePlanCode(v string)`

SetChannelRatePlanCode sets ChannelRatePlanCode field to given value.

### HasChannelRatePlanCode

`func (o *ChannelRatesAccessMain) HasChannelRatePlanCode() bool`

HasChannelRatePlanCode returns a boolean if a field has been set.

### GetStartDate

`func (o *ChannelRatesAccessMain) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *ChannelRatesAccessMain) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *ChannelRatesAccessMain) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *ChannelRatesAccessMain) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *ChannelRatesAccessMain) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ChannelRatesAccessMain) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ChannelRatesAccessMain) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *ChannelRatesAccessMain) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetRateAccessCode

`func (o *ChannelRatesAccessMain) GetRateAccessCode() string`

GetRateAccessCode returns the RateAccessCode field if non-nil, zero value otherwise.

### GetRateAccessCodeOk

`func (o *ChannelRatesAccessMain) GetRateAccessCodeOk() (*string, bool)`

GetRateAccessCodeOk returns a tuple with the RateAccessCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateAccessCode

`func (o *ChannelRatesAccessMain) SetRateAccessCode(v string)`

SetRateAccessCode sets RateAccessCode field to given value.

### HasRateAccessCode

`func (o *ChannelRatesAccessMain) HasRateAccessCode() bool`

HasRateAccessCode returns a boolean if a field has been set.

### GetActive

`func (o *ChannelRatesAccessMain) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ChannelRatesAccessMain) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ChannelRatesAccessMain) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ChannelRatesAccessMain) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetAccountId

`func (o *ChannelRatesAccessMain) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *ChannelRatesAccessMain) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *ChannelRatesAccessMain) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *ChannelRatesAccessMain) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetAccountName

`func (o *ChannelRatesAccessMain) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *ChannelRatesAccessMain) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *ChannelRatesAccessMain) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *ChannelRatesAccessMain) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetProfileAccountType

`func (o *ChannelRatesAccessMain) GetProfileAccountType() AccountTypeEnum`

GetProfileAccountType returns the ProfileAccountType field if non-nil, zero value otherwise.

### GetProfileAccountTypeOk

`func (o *ChannelRatesAccessMain) GetProfileAccountTypeOk() (*AccountTypeEnum, bool)`

GetProfileAccountTypeOk returns a tuple with the ProfileAccountType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileAccountType

`func (o *ChannelRatesAccessMain) SetProfileAccountType(v AccountTypeEnum)`

SetProfileAccountType sets ProfileAccountType field to given value.

### HasProfileAccountType

`func (o *ChannelRatesAccessMain) HasProfileAccountType() bool`

HasProfileAccountType returns a boolean if a field has been set.

### GetProfileId

`func (o *ChannelRatesAccessMain) GetProfileId() string`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ChannelRatesAccessMain) GetProfileIdOk() (*string, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ChannelRatesAccessMain) SetProfileId(v string)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ChannelRatesAccessMain) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


