# StatisticType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChainCode** | Pointer to **string** | The code that identifies a hotel chain or management group. The hotel chain code is decided between vendors. This attribute is optional if the hotel is an independent property that can be identified by the HotelCode attribute. | [optional] 
**ChainName** | Pointer to **string** | The name of the hotel chain (e.g., Hilton, Marriott, Hyatt). | [optional] 
**Description** | Pointer to **string** | This element has revenue amount data for its revenue category such as Room Revenue, Food and Beverage Revenue. | [optional] 
**FiscalDate** | Pointer to **string** | Hotel fiscal date for statistics. | [optional] 
**HotelCityCode** | Pointer to **string** | The IATA city code; for example DCA, ORD. | [optional] 
**HotelCodeContext** | Pointer to **string** | A text field used to communicate the context (or source of - ex Sabre, Galileo, Worldspan, Amadeus) the HotelReferenceGroup codes. | [optional] 
**HotelId** | Pointer to **string** | The code that uniquely identifies a single hotel property. The hotel code is decided between vendors. | [optional] 
**HotelName** | Pointer to **string** | A text field used to communicate the proper name of the hotel. | [optional] 
**ReportCode** | Pointer to **string** | Identifies the type of statistics collected. Each ReportCode corresponds to a set of category summaries based upon a predetermined agreement. | [optional] 
**StatisticCodesType** | Pointer to [**[]StatisticCodeType**](StatisticCodeType.md) | Statistic Codes. | [optional] 

## Methods

### NewStatisticType

`func NewStatisticType() *StatisticType`

NewStatisticType instantiates a new StatisticType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStatisticTypeWithDefaults

`func NewStatisticTypeWithDefaults() *StatisticType`

NewStatisticTypeWithDefaults instantiates a new StatisticType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChainCode

`func (o *StatisticType) GetChainCode() string`

GetChainCode returns the ChainCode field if non-nil, zero value otherwise.

### GetChainCodeOk

`func (o *StatisticType) GetChainCodeOk() (*string, bool)`

GetChainCodeOk returns a tuple with the ChainCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainCode

`func (o *StatisticType) SetChainCode(v string)`

SetChainCode sets ChainCode field to given value.

### HasChainCode

`func (o *StatisticType) HasChainCode() bool`

HasChainCode returns a boolean if a field has been set.

### GetChainName

`func (o *StatisticType) GetChainName() string`

GetChainName returns the ChainName field if non-nil, zero value otherwise.

### GetChainNameOk

`func (o *StatisticType) GetChainNameOk() (*string, bool)`

GetChainNameOk returns a tuple with the ChainName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainName

`func (o *StatisticType) SetChainName(v string)`

SetChainName sets ChainName field to given value.

### HasChainName

`func (o *StatisticType) HasChainName() bool`

HasChainName returns a boolean if a field has been set.

### GetDescription

`func (o *StatisticType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *StatisticType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *StatisticType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *StatisticType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFiscalDate

`func (o *StatisticType) GetFiscalDate() string`

GetFiscalDate returns the FiscalDate field if non-nil, zero value otherwise.

### GetFiscalDateOk

`func (o *StatisticType) GetFiscalDateOk() (*string, bool)`

GetFiscalDateOk returns a tuple with the FiscalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalDate

`func (o *StatisticType) SetFiscalDate(v string)`

SetFiscalDate sets FiscalDate field to given value.

### HasFiscalDate

`func (o *StatisticType) HasFiscalDate() bool`

HasFiscalDate returns a boolean if a field has been set.

### GetHotelCityCode

`func (o *StatisticType) GetHotelCityCode() string`

GetHotelCityCode returns the HotelCityCode field if non-nil, zero value otherwise.

### GetHotelCityCodeOk

`func (o *StatisticType) GetHotelCityCodeOk() (*string, bool)`

GetHotelCityCodeOk returns a tuple with the HotelCityCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCityCode

`func (o *StatisticType) SetHotelCityCode(v string)`

SetHotelCityCode sets HotelCityCode field to given value.

### HasHotelCityCode

`func (o *StatisticType) HasHotelCityCode() bool`

HasHotelCityCode returns a boolean if a field has been set.

### GetHotelCodeContext

`func (o *StatisticType) GetHotelCodeContext() string`

GetHotelCodeContext returns the HotelCodeContext field if non-nil, zero value otherwise.

### GetHotelCodeContextOk

`func (o *StatisticType) GetHotelCodeContextOk() (*string, bool)`

GetHotelCodeContextOk returns a tuple with the HotelCodeContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCodeContext

`func (o *StatisticType) SetHotelCodeContext(v string)`

SetHotelCodeContext sets HotelCodeContext field to given value.

### HasHotelCodeContext

`func (o *StatisticType) HasHotelCodeContext() bool`

HasHotelCodeContext returns a boolean if a field has been set.

### GetHotelId

`func (o *StatisticType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *StatisticType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *StatisticType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *StatisticType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHotelName

`func (o *StatisticType) GetHotelName() string`

GetHotelName returns the HotelName field if non-nil, zero value otherwise.

### GetHotelNameOk

`func (o *StatisticType) GetHotelNameOk() (*string, bool)`

GetHotelNameOk returns a tuple with the HotelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelName

`func (o *StatisticType) SetHotelName(v string)`

SetHotelName sets HotelName field to given value.

### HasHotelName

`func (o *StatisticType) HasHotelName() bool`

HasHotelName returns a boolean if a field has been set.

### GetReportCode

`func (o *StatisticType) GetReportCode() string`

GetReportCode returns the ReportCode field if non-nil, zero value otherwise.

### GetReportCodeOk

`func (o *StatisticType) GetReportCodeOk() (*string, bool)`

GetReportCodeOk returns a tuple with the ReportCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportCode

`func (o *StatisticType) SetReportCode(v string)`

SetReportCode sets ReportCode field to given value.

### HasReportCode

`func (o *StatisticType) HasReportCode() bool`

HasReportCode returns a boolean if a field has been set.

### GetStatisticCodesType

`func (o *StatisticType) GetStatisticCodesType() []StatisticCodeType`

GetStatisticCodesType returns the StatisticCodesType field if non-nil, zero value otherwise.

### GetStatisticCodesTypeOk

`func (o *StatisticType) GetStatisticCodesTypeOk() (*[]StatisticCodeType, bool)`

GetStatisticCodesTypeOk returns a tuple with the StatisticCodesType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatisticCodesType

`func (o *StatisticType) SetStatisticCodesType(v []StatisticCodeType)`

SetStatisticCodesType sets StatisticCodesType field to given value.

### HasStatisticCodesType

`func (o *StatisticType) HasStatisticCodesType() bool`

HasStatisticCodesType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


