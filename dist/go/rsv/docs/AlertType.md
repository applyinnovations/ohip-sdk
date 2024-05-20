# AlertType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Area** | Pointer to [**AlertAreaType**](AlertAreaType.md) |  | [optional] 
**Code** | Pointer to **string** | Code identifying the type of alert. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**Description** | Pointer to **string** | The alert message. | [optional] 
**Global** | Pointer to **bool** | Indicate whether the alert is a global that is automatically and dynamically attached to all reservations that meet the alert criteria. | [optional] 
**GuestInfo** | Pointer to [**AlertGuestInfoType**](AlertGuestInfoType.md) |  | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**PrinterName** | Pointer to **string** | Printer used to print the alert notification. | [optional] 
**PrinterNotification** | Pointer to **bool** | Notify by sending the message to the printer. | [optional] 
**ReportDescription** | Pointer to **string** | Report description. Mainly used for as a parameter for printing the alerts. | [optional] 
**ReportId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ReportName** | Pointer to **string** | Report name of the report type. | [optional] 
**ScreenNotification** | Pointer to **bool** | Notify by showing the alert on the screen | [optional] 
**StopCheckInCheckOut** | Pointer to **bool** | Indicates the Reservation Stop Check In/Check Out Global Alert. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**UserDefinedFields** | Pointer to [**UserDefinedFieldsType**](UserDefinedFieldsType.md) |  | [optional] 
**WelcomeOffer** | Pointer to [**WelcomeOfferType**](WelcomeOfferType.md) |  | [optional] 

## Methods

### NewAlertType

`func NewAlertType() *AlertType`

NewAlertType instantiates a new AlertType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAlertTypeWithDefaults

`func NewAlertTypeWithDefaults() *AlertType`

NewAlertTypeWithDefaults instantiates a new AlertType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArea

`func (o *AlertType) GetArea() AlertAreaType`

GetArea returns the Area field if non-nil, zero value otherwise.

### GetAreaOk

`func (o *AlertType) GetAreaOk() (*AlertAreaType, bool)`

GetAreaOk returns a tuple with the Area field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArea

`func (o *AlertType) SetArea(v AlertAreaType)`

SetArea sets Area field to given value.

### HasArea

`func (o *AlertType) HasArea() bool`

HasArea returns a boolean if a field has been set.

### GetCode

`func (o *AlertType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *AlertType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *AlertType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *AlertType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *AlertType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *AlertType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *AlertType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *AlertType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *AlertType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *AlertType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *AlertType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *AlertType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetDescription

`func (o *AlertType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AlertType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AlertType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AlertType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetGlobal

`func (o *AlertType) GetGlobal() bool`

GetGlobal returns the Global field if non-nil, zero value otherwise.

### GetGlobalOk

`func (o *AlertType) GetGlobalOk() (*bool, bool)`

GetGlobalOk returns a tuple with the Global field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGlobal

`func (o *AlertType) SetGlobal(v bool)`

SetGlobal sets Global field to given value.

### HasGlobal

`func (o *AlertType) HasGlobal() bool`

HasGlobal returns a boolean if a field has been set.

### GetGuestInfo

`func (o *AlertType) GetGuestInfo() AlertGuestInfoType`

GetGuestInfo returns the GuestInfo field if non-nil, zero value otherwise.

### GetGuestInfoOk

`func (o *AlertType) GetGuestInfoOk() (*AlertGuestInfoType, bool)`

GetGuestInfoOk returns a tuple with the GuestInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestInfo

`func (o *AlertType) SetGuestInfo(v AlertGuestInfoType)`

SetGuestInfo sets GuestInfo field to given value.

### HasGuestInfo

`func (o *AlertType) HasGuestInfo() bool`

HasGuestInfo returns a boolean if a field has been set.

### GetId

`func (o *AlertType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AlertType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AlertType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AlertType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdContext

`func (o *AlertType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *AlertType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *AlertType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *AlertType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetLastModifierId

`func (o *AlertType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *AlertType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *AlertType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *AlertType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *AlertType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *AlertType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *AlertType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *AlertType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetPrinterName

`func (o *AlertType) GetPrinterName() string`

GetPrinterName returns the PrinterName field if non-nil, zero value otherwise.

### GetPrinterNameOk

`func (o *AlertType) GetPrinterNameOk() (*string, bool)`

GetPrinterNameOk returns a tuple with the PrinterName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrinterName

`func (o *AlertType) SetPrinterName(v string)`

SetPrinterName sets PrinterName field to given value.

### HasPrinterName

`func (o *AlertType) HasPrinterName() bool`

HasPrinterName returns a boolean if a field has been set.

### GetPrinterNotification

`func (o *AlertType) GetPrinterNotification() bool`

GetPrinterNotification returns the PrinterNotification field if non-nil, zero value otherwise.

### GetPrinterNotificationOk

`func (o *AlertType) GetPrinterNotificationOk() (*bool, bool)`

GetPrinterNotificationOk returns a tuple with the PrinterNotification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrinterNotification

`func (o *AlertType) SetPrinterNotification(v bool)`

SetPrinterNotification sets PrinterNotification field to given value.

### HasPrinterNotification

`func (o *AlertType) HasPrinterNotification() bool`

HasPrinterNotification returns a boolean if a field has been set.

### GetReportDescription

`func (o *AlertType) GetReportDescription() string`

GetReportDescription returns the ReportDescription field if non-nil, zero value otherwise.

### GetReportDescriptionOk

`func (o *AlertType) GetReportDescriptionOk() (*string, bool)`

GetReportDescriptionOk returns a tuple with the ReportDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportDescription

`func (o *AlertType) SetReportDescription(v string)`

SetReportDescription sets ReportDescription field to given value.

### HasReportDescription

`func (o *AlertType) HasReportDescription() bool`

HasReportDescription returns a boolean if a field has been set.

### GetReportId

`func (o *AlertType) GetReportId() UniqueIDType`

GetReportId returns the ReportId field if non-nil, zero value otherwise.

### GetReportIdOk

`func (o *AlertType) GetReportIdOk() (*UniqueIDType, bool)`

GetReportIdOk returns a tuple with the ReportId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportId

`func (o *AlertType) SetReportId(v UniqueIDType)`

SetReportId sets ReportId field to given value.

### HasReportId

`func (o *AlertType) HasReportId() bool`

HasReportId returns a boolean if a field has been set.

### GetReportName

`func (o *AlertType) GetReportName() string`

GetReportName returns the ReportName field if non-nil, zero value otherwise.

### GetReportNameOk

`func (o *AlertType) GetReportNameOk() (*string, bool)`

GetReportNameOk returns a tuple with the ReportName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportName

`func (o *AlertType) SetReportName(v string)`

SetReportName sets ReportName field to given value.

### HasReportName

`func (o *AlertType) HasReportName() bool`

HasReportName returns a boolean if a field has been set.

### GetScreenNotification

`func (o *AlertType) GetScreenNotification() bool`

GetScreenNotification returns the ScreenNotification field if non-nil, zero value otherwise.

### GetScreenNotificationOk

`func (o *AlertType) GetScreenNotificationOk() (*bool, bool)`

GetScreenNotificationOk returns a tuple with the ScreenNotification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScreenNotification

`func (o *AlertType) SetScreenNotification(v bool)`

SetScreenNotification sets ScreenNotification field to given value.

### HasScreenNotification

`func (o *AlertType) HasScreenNotification() bool`

HasScreenNotification returns a boolean if a field has been set.

### GetStopCheckInCheckOut

`func (o *AlertType) GetStopCheckInCheckOut() bool`

GetStopCheckInCheckOut returns the StopCheckInCheckOut field if non-nil, zero value otherwise.

### GetStopCheckInCheckOutOk

`func (o *AlertType) GetStopCheckInCheckOutOk() (*bool, bool)`

GetStopCheckInCheckOutOk returns a tuple with the StopCheckInCheckOut field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStopCheckInCheckOut

`func (o *AlertType) SetStopCheckInCheckOut(v bool)`

SetStopCheckInCheckOut sets StopCheckInCheckOut field to given value.

### HasStopCheckInCheckOut

`func (o *AlertType) HasStopCheckInCheckOut() bool`

HasStopCheckInCheckOut returns a boolean if a field has been set.

### GetType

`func (o *AlertType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AlertType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AlertType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AlertType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUserDefinedFields

`func (o *AlertType) GetUserDefinedFields() UserDefinedFieldsType`

GetUserDefinedFields returns the UserDefinedFields field if non-nil, zero value otherwise.

### GetUserDefinedFieldsOk

`func (o *AlertType) GetUserDefinedFieldsOk() (*UserDefinedFieldsType, bool)`

GetUserDefinedFieldsOk returns a tuple with the UserDefinedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFields

`func (o *AlertType) SetUserDefinedFields(v UserDefinedFieldsType)`

SetUserDefinedFields sets UserDefinedFields field to given value.

### HasUserDefinedFields

`func (o *AlertType) HasUserDefinedFields() bool`

HasUserDefinedFields returns a boolean if a field has been set.

### GetWelcomeOffer

`func (o *AlertType) GetWelcomeOffer() WelcomeOfferType`

GetWelcomeOffer returns the WelcomeOffer field if non-nil, zero value otherwise.

### GetWelcomeOfferOk

`func (o *AlertType) GetWelcomeOfferOk() (*WelcomeOfferType, bool)`

GetWelcomeOfferOk returns a tuple with the WelcomeOffer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWelcomeOffer

`func (o *AlertType) SetWelcomeOffer(v WelcomeOfferType)`

SetWelcomeOffer sets WelcomeOffer field to given value.

### HasWelcomeOffer

`func (o *AlertType) HasWelcomeOffer() bool`

HasWelcomeOffer returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


