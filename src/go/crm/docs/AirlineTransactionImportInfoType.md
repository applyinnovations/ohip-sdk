# AirlineTransactionImportInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the error that caused the import to fail | [optional] 
**ImportDate** | Pointer to **string** | The date when this batch was imported into OPERA | [optional] 
**Status** | Pointer to [**AirlineImportStatusType**](AirlineImportStatusType.md) |  | [optional] 

## Methods

### NewAirlineTransactionImportInfoType

`func NewAirlineTransactionImportInfoType() *AirlineTransactionImportInfoType`

NewAirlineTransactionImportInfoType instantiates a new AirlineTransactionImportInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAirlineTransactionImportInfoTypeWithDefaults

`func NewAirlineTransactionImportInfoTypeWithDefaults() *AirlineTransactionImportInfoType`

NewAirlineTransactionImportInfoTypeWithDefaults instantiates a new AirlineTransactionImportInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *AirlineTransactionImportInfoType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AirlineTransactionImportInfoType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AirlineTransactionImportInfoType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AirlineTransactionImportInfoType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetImportDate

`func (o *AirlineTransactionImportInfoType) GetImportDate() string`

GetImportDate returns the ImportDate field if non-nil, zero value otherwise.

### GetImportDateOk

`func (o *AirlineTransactionImportInfoType) GetImportDateOk() (*string, bool)`

GetImportDateOk returns a tuple with the ImportDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImportDate

`func (o *AirlineTransactionImportInfoType) SetImportDate(v string)`

SetImportDate sets ImportDate field to given value.

### HasImportDate

`func (o *AirlineTransactionImportInfoType) HasImportDate() bool`

HasImportDate returns a boolean if a field has been set.

### GetStatus

`func (o *AirlineTransactionImportInfoType) GetStatus() AirlineImportStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AirlineTransactionImportInfoType) GetStatusOk() (*AirlineImportStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AirlineTransactionImportInfoType) SetStatus(v AirlineImportStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *AirlineTransactionImportInfoType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


