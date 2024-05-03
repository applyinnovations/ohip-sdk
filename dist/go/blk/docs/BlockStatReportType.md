# BlockStatReportType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CalendarDate** | Pointer to **string** | Statistical date of the requested report. | [optional] 
**ChainCode** | Pointer to **string** | The code that identifies a hotel chain or management group. The hotel chain code is decided between vendors. This attribute is optional if the hotel is an independent property that can be identified by the HotelCode attribute. | [optional] 
**ChainName** | Pointer to **string** | The name of the hotel chain (e.g., Hilton, Marriott, Hyatt). | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**HotelCityCode** | Pointer to **string** | The IATA city code; for example DCA, ORD. | [optional] 
**HotelCodeContext** | Pointer to **string** | A text field used to communicate the context (or source of - ex Sabre, Galileo, Worldspan, Amadeus) the HotelReferenceGroup codes. | [optional] 
**HotelId** | Pointer to **string** | The code that uniquely identifies a single hotel property. The hotel code is decided between vendors. | [optional] 
**HotelName** | Pointer to **string** | A text field used to communicate the proper name of the hotel. | [optional] 
**ReportCode** | Pointer to [**HSKStatReportCodeType**](HSKStatReportCodeType.md) |  | [optional] 
**StatCategory** | Pointer to [**[]HSKStatCategoryType**](HSKStatCategoryType.md) |  | [optional] 

## Methods

### NewBlockStatReportType

`func NewBlockStatReportType() *BlockStatReportType`

NewBlockStatReportType instantiates a new BlockStatReportType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockStatReportTypeWithDefaults

`func NewBlockStatReportTypeWithDefaults() *BlockStatReportType`

NewBlockStatReportTypeWithDefaults instantiates a new BlockStatReportType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCalendarDate

`func (o *BlockStatReportType) GetCalendarDate() string`

GetCalendarDate returns the CalendarDate field if non-nil, zero value otherwise.

### GetCalendarDateOk

`func (o *BlockStatReportType) GetCalendarDateOk() (*string, bool)`

GetCalendarDateOk returns a tuple with the CalendarDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalendarDate

`func (o *BlockStatReportType) SetCalendarDate(v string)`

SetCalendarDate sets CalendarDate field to given value.

### HasCalendarDate

`func (o *BlockStatReportType) HasCalendarDate() bool`

HasCalendarDate returns a boolean if a field has been set.

### GetChainCode

`func (o *BlockStatReportType) GetChainCode() string`

GetChainCode returns the ChainCode field if non-nil, zero value otherwise.

### GetChainCodeOk

`func (o *BlockStatReportType) GetChainCodeOk() (*string, bool)`

GetChainCodeOk returns a tuple with the ChainCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainCode

`func (o *BlockStatReportType) SetChainCode(v string)`

SetChainCode sets ChainCode field to given value.

### HasChainCode

`func (o *BlockStatReportType) HasChainCode() bool`

HasChainCode returns a boolean if a field has been set.

### GetChainName

`func (o *BlockStatReportType) GetChainName() string`

GetChainName returns the ChainName field if non-nil, zero value otherwise.

### GetChainNameOk

`func (o *BlockStatReportType) GetChainNameOk() (*string, bool)`

GetChainNameOk returns a tuple with the ChainName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainName

`func (o *BlockStatReportType) SetChainName(v string)`

SetChainName sets ChainName field to given value.

### HasChainName

`func (o *BlockStatReportType) HasChainName() bool`

HasChainName returns a boolean if a field has been set.

### GetDescription

`func (o *BlockStatReportType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *BlockStatReportType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *BlockStatReportType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *BlockStatReportType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelCityCode

`func (o *BlockStatReportType) GetHotelCityCode() string`

GetHotelCityCode returns the HotelCityCode field if non-nil, zero value otherwise.

### GetHotelCityCodeOk

`func (o *BlockStatReportType) GetHotelCityCodeOk() (*string, bool)`

GetHotelCityCodeOk returns a tuple with the HotelCityCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCityCode

`func (o *BlockStatReportType) SetHotelCityCode(v string)`

SetHotelCityCode sets HotelCityCode field to given value.

### HasHotelCityCode

`func (o *BlockStatReportType) HasHotelCityCode() bool`

HasHotelCityCode returns a boolean if a field has been set.

### GetHotelCodeContext

`func (o *BlockStatReportType) GetHotelCodeContext() string`

GetHotelCodeContext returns the HotelCodeContext field if non-nil, zero value otherwise.

### GetHotelCodeContextOk

`func (o *BlockStatReportType) GetHotelCodeContextOk() (*string, bool)`

GetHotelCodeContextOk returns a tuple with the HotelCodeContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCodeContext

`func (o *BlockStatReportType) SetHotelCodeContext(v string)`

SetHotelCodeContext sets HotelCodeContext field to given value.

### HasHotelCodeContext

`func (o *BlockStatReportType) HasHotelCodeContext() bool`

HasHotelCodeContext returns a boolean if a field has been set.

### GetHotelId

`func (o *BlockStatReportType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockStatReportType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockStatReportType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockStatReportType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHotelName

`func (o *BlockStatReportType) GetHotelName() string`

GetHotelName returns the HotelName field if non-nil, zero value otherwise.

### GetHotelNameOk

`func (o *BlockStatReportType) GetHotelNameOk() (*string, bool)`

GetHotelNameOk returns a tuple with the HotelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelName

`func (o *BlockStatReportType) SetHotelName(v string)`

SetHotelName sets HotelName field to given value.

### HasHotelName

`func (o *BlockStatReportType) HasHotelName() bool`

HasHotelName returns a boolean if a field has been set.

### GetReportCode

`func (o *BlockStatReportType) GetReportCode() HSKStatReportCodeType`

GetReportCode returns the ReportCode field if non-nil, zero value otherwise.

### GetReportCodeOk

`func (o *BlockStatReportType) GetReportCodeOk() (*HSKStatReportCodeType, bool)`

GetReportCodeOk returns a tuple with the ReportCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportCode

`func (o *BlockStatReportType) SetReportCode(v HSKStatReportCodeType)`

SetReportCode sets ReportCode field to given value.

### HasReportCode

`func (o *BlockStatReportType) HasReportCode() bool`

HasReportCode returns a boolean if a field has been set.

### GetStatCategory

`func (o *BlockStatReportType) GetStatCategory() []HSKStatCategoryType`

GetStatCategory returns the StatCategory field if non-nil, zero value otherwise.

### GetStatCategoryOk

`func (o *BlockStatReportType) GetStatCategoryOk() (*[]HSKStatCategoryType, bool)`

GetStatCategoryOk returns a tuple with the StatCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatCategory

`func (o *BlockStatReportType) SetStatCategory(v []HSKStatCategoryType)`

SetStatCategory sets StatCategory field to given value.

### HasStatCategory

`func (o *BlockStatReportType) HasStatCategory() bool`

HasStatCategory returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


