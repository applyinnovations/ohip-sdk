# CashierClosureInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierClosureNo** | Pointer to [**CashierClosureNoType**](CashierClosureNoType.md) |  | [optional] 
**CashierTitle** | Pointer to **string** | Cashier title of the cashier. | [optional] 
**CashierUser** | Pointer to **string** | Cashier user name. | [optional] 
**CloseDate** | Pointer to **string** | Date and time cashier was closed. | [optional] 
**ClosureBusinessDate** | Pointer to **string** | Business date cashier was closed. | [optional] 
**HotelId** | Pointer to **string** | Property this record belongs to. | [optional] 
**OpenDate** | Pointer to **string** | Date and time cashier was opened. | [optional] 
**ReportsList** | Pointer to [**[]CashierReportType**](CashierReportType.md) | Information of the Cashier. | [optional] 

## Methods

### NewCashierClosureInfoType

`func NewCashierClosureInfoType() *CashierClosureInfoType`

NewCashierClosureInfoType instantiates a new CashierClosureInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCashierClosureInfoTypeWithDefaults

`func NewCashierClosureInfoTypeWithDefaults() *CashierClosureInfoType`

NewCashierClosureInfoTypeWithDefaults instantiates a new CashierClosureInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierClosureNo

`func (o *CashierClosureInfoType) GetCashierClosureNo() CashierClosureNoType`

GetCashierClosureNo returns the CashierClosureNo field if non-nil, zero value otherwise.

### GetCashierClosureNoOk

`func (o *CashierClosureInfoType) GetCashierClosureNoOk() (*CashierClosureNoType, bool)`

GetCashierClosureNoOk returns a tuple with the CashierClosureNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierClosureNo

`func (o *CashierClosureInfoType) SetCashierClosureNo(v CashierClosureNoType)`

SetCashierClosureNo sets CashierClosureNo field to given value.

### HasCashierClosureNo

`func (o *CashierClosureInfoType) HasCashierClosureNo() bool`

HasCashierClosureNo returns a boolean if a field has been set.

### GetCashierTitle

`func (o *CashierClosureInfoType) GetCashierTitle() string`

GetCashierTitle returns the CashierTitle field if non-nil, zero value otherwise.

### GetCashierTitleOk

`func (o *CashierClosureInfoType) GetCashierTitleOk() (*string, bool)`

GetCashierTitleOk returns a tuple with the CashierTitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierTitle

`func (o *CashierClosureInfoType) SetCashierTitle(v string)`

SetCashierTitle sets CashierTitle field to given value.

### HasCashierTitle

`func (o *CashierClosureInfoType) HasCashierTitle() bool`

HasCashierTitle returns a boolean if a field has been set.

### GetCashierUser

`func (o *CashierClosureInfoType) GetCashierUser() string`

GetCashierUser returns the CashierUser field if non-nil, zero value otherwise.

### GetCashierUserOk

`func (o *CashierClosureInfoType) GetCashierUserOk() (*string, bool)`

GetCashierUserOk returns a tuple with the CashierUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierUser

`func (o *CashierClosureInfoType) SetCashierUser(v string)`

SetCashierUser sets CashierUser field to given value.

### HasCashierUser

`func (o *CashierClosureInfoType) HasCashierUser() bool`

HasCashierUser returns a boolean if a field has been set.

### GetCloseDate

`func (o *CashierClosureInfoType) GetCloseDate() string`

GetCloseDate returns the CloseDate field if non-nil, zero value otherwise.

### GetCloseDateOk

`func (o *CashierClosureInfoType) GetCloseDateOk() (*string, bool)`

GetCloseDateOk returns a tuple with the CloseDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloseDate

`func (o *CashierClosureInfoType) SetCloseDate(v string)`

SetCloseDate sets CloseDate field to given value.

### HasCloseDate

`func (o *CashierClosureInfoType) HasCloseDate() bool`

HasCloseDate returns a boolean if a field has been set.

### GetClosureBusinessDate

`func (o *CashierClosureInfoType) GetClosureBusinessDate() string`

GetClosureBusinessDate returns the ClosureBusinessDate field if non-nil, zero value otherwise.

### GetClosureBusinessDateOk

`func (o *CashierClosureInfoType) GetClosureBusinessDateOk() (*string, bool)`

GetClosureBusinessDateOk returns a tuple with the ClosureBusinessDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClosureBusinessDate

`func (o *CashierClosureInfoType) SetClosureBusinessDate(v string)`

SetClosureBusinessDate sets ClosureBusinessDate field to given value.

### HasClosureBusinessDate

`func (o *CashierClosureInfoType) HasClosureBusinessDate() bool`

HasClosureBusinessDate returns a boolean if a field has been set.

### GetHotelId

`func (o *CashierClosureInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CashierClosureInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CashierClosureInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CashierClosureInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetOpenDate

`func (o *CashierClosureInfoType) GetOpenDate() string`

GetOpenDate returns the OpenDate field if non-nil, zero value otherwise.

### GetOpenDateOk

`func (o *CashierClosureInfoType) GetOpenDateOk() (*string, bool)`

GetOpenDateOk returns a tuple with the OpenDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpenDate

`func (o *CashierClosureInfoType) SetOpenDate(v string)`

SetOpenDate sets OpenDate field to given value.

### HasOpenDate

`func (o *CashierClosureInfoType) HasOpenDate() bool`

HasOpenDate returns a boolean if a field has been set.

### GetReportsList

`func (o *CashierClosureInfoType) GetReportsList() []CashierReportType`

GetReportsList returns the ReportsList field if non-nil, zero value otherwise.

### GetReportsListOk

`func (o *CashierClosureInfoType) GetReportsListOk() (*[]CashierReportType, bool)`

GetReportsListOk returns a tuple with the ReportsList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportsList

`func (o *CashierClosureInfoType) SetReportsList(v []CashierReportType)`

SetReportsList sets ReportsList field to given value.

### HasReportsList

`func (o *CashierClosureInfoType) HasReportsList() bool`

HasReportsList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


