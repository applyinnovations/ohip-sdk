# ActivityStatReportType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChainCode** | Pointer to **string** | The code that identifies a hotel chain or management group. The hotel chain code is decided between vendors. This attribute is optional if the hotel is an independent property that can be identified by the HotelCode attribute. | [optional] 
**HotelId** | Pointer to **string** | The code that uniquely identifies a single hotel property. The hotel code is decided between vendors. | [optional] 
**HotelCityCode** | Pointer to **string** | The IATA city code; for example DCA, ORD. | [optional] 
**HotelName** | Pointer to **string** | A text field used to communicate the proper name of the hotel. | [optional] 
**HotelCodeContext** | Pointer to **string** | A text field used to communicate the context (or source of - ex Sabre, Galileo, Worldspan, Amadeus) the HotelReferenceGroup codes. | [optional] 
**ChainName** | Pointer to **string** | The name of the hotel chain (e.g., Hilton, Marriott, Hyatt). | [optional] 
**CalendarDate** | Pointer to **string** | Statistical date of the requested report. | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**StatCategory** | Pointer to [**[]ActivityStatCategoryType**](ActivityStatCategoryType.md) |  | [optional] 
**ReportCode** | Pointer to [**ActivityStatReportCodeType**](ActivityStatReportCodeType.md) |  | [optional] 

## Methods

### NewActivityStatReportType

`func NewActivityStatReportType() *ActivityStatReportType`

NewActivityStatReportType instantiates a new ActivityStatReportType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityStatReportTypeWithDefaults

`func NewActivityStatReportTypeWithDefaults() *ActivityStatReportType`

NewActivityStatReportTypeWithDefaults instantiates a new ActivityStatReportType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChainCode

`func (o *ActivityStatReportType) GetChainCode() string`

GetChainCode returns the ChainCode field if non-nil, zero value otherwise.

### GetChainCodeOk

`func (o *ActivityStatReportType) GetChainCodeOk() (*string, bool)`

GetChainCodeOk returns a tuple with the ChainCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainCode

`func (o *ActivityStatReportType) SetChainCode(v string)`

SetChainCode sets ChainCode field to given value.

### HasChainCode

`func (o *ActivityStatReportType) HasChainCode() bool`

HasChainCode returns a boolean if a field has been set.

### GetHotelId

`func (o *ActivityStatReportType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ActivityStatReportType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ActivityStatReportType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ActivityStatReportType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHotelCityCode

`func (o *ActivityStatReportType) GetHotelCityCode() string`

GetHotelCityCode returns the HotelCityCode field if non-nil, zero value otherwise.

### GetHotelCityCodeOk

`func (o *ActivityStatReportType) GetHotelCityCodeOk() (*string, bool)`

GetHotelCityCodeOk returns a tuple with the HotelCityCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCityCode

`func (o *ActivityStatReportType) SetHotelCityCode(v string)`

SetHotelCityCode sets HotelCityCode field to given value.

### HasHotelCityCode

`func (o *ActivityStatReportType) HasHotelCityCode() bool`

HasHotelCityCode returns a boolean if a field has been set.

### GetHotelName

`func (o *ActivityStatReportType) GetHotelName() string`

GetHotelName returns the HotelName field if non-nil, zero value otherwise.

### GetHotelNameOk

`func (o *ActivityStatReportType) GetHotelNameOk() (*string, bool)`

GetHotelNameOk returns a tuple with the HotelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelName

`func (o *ActivityStatReportType) SetHotelName(v string)`

SetHotelName sets HotelName field to given value.

### HasHotelName

`func (o *ActivityStatReportType) HasHotelName() bool`

HasHotelName returns a boolean if a field has been set.

### GetHotelCodeContext

`func (o *ActivityStatReportType) GetHotelCodeContext() string`

GetHotelCodeContext returns the HotelCodeContext field if non-nil, zero value otherwise.

### GetHotelCodeContextOk

`func (o *ActivityStatReportType) GetHotelCodeContextOk() (*string, bool)`

GetHotelCodeContextOk returns a tuple with the HotelCodeContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCodeContext

`func (o *ActivityStatReportType) SetHotelCodeContext(v string)`

SetHotelCodeContext sets HotelCodeContext field to given value.

### HasHotelCodeContext

`func (o *ActivityStatReportType) HasHotelCodeContext() bool`

HasHotelCodeContext returns a boolean if a field has been set.

### GetChainName

`func (o *ActivityStatReportType) GetChainName() string`

GetChainName returns the ChainName field if non-nil, zero value otherwise.

### GetChainNameOk

`func (o *ActivityStatReportType) GetChainNameOk() (*string, bool)`

GetChainNameOk returns a tuple with the ChainName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainName

`func (o *ActivityStatReportType) SetChainName(v string)`

SetChainName sets ChainName field to given value.

### HasChainName

`func (o *ActivityStatReportType) HasChainName() bool`

HasChainName returns a boolean if a field has been set.

### GetCalendarDate

`func (o *ActivityStatReportType) GetCalendarDate() string`

GetCalendarDate returns the CalendarDate field if non-nil, zero value otherwise.

### GetCalendarDateOk

`func (o *ActivityStatReportType) GetCalendarDateOk() (*string, bool)`

GetCalendarDateOk returns a tuple with the CalendarDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalendarDate

`func (o *ActivityStatReportType) SetCalendarDate(v string)`

SetCalendarDate sets CalendarDate field to given value.

### HasCalendarDate

`func (o *ActivityStatReportType) HasCalendarDate() bool`

HasCalendarDate returns a boolean if a field has been set.

### GetDescription

`func (o *ActivityStatReportType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ActivityStatReportType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ActivityStatReportType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ActivityStatReportType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetStatCategory

`func (o *ActivityStatReportType) GetStatCategory() []ActivityStatCategoryType`

GetStatCategory returns the StatCategory field if non-nil, zero value otherwise.

### GetStatCategoryOk

`func (o *ActivityStatReportType) GetStatCategoryOk() (*[]ActivityStatCategoryType, bool)`

GetStatCategoryOk returns a tuple with the StatCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatCategory

`func (o *ActivityStatReportType) SetStatCategory(v []ActivityStatCategoryType)`

SetStatCategory sets StatCategory field to given value.

### HasStatCategory

`func (o *ActivityStatReportType) HasStatCategory() bool`

HasStatCategory returns a boolean if a field has been set.

### GetReportCode

`func (o *ActivityStatReportType) GetReportCode() ActivityStatReportCodeType`

GetReportCode returns the ReportCode field if non-nil, zero value otherwise.

### GetReportCodeOk

`func (o *ActivityStatReportType) GetReportCodeOk() (*ActivityStatReportCodeType, bool)`

GetReportCodeOk returns a tuple with the ReportCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportCode

`func (o *ActivityStatReportType) SetReportCode(v ActivityStatReportCodeType)`

SetReportCode sets ReportCode field to given value.

### HasReportCode

`func (o *ActivityStatReportType) HasReportCode() bool`

HasReportCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


