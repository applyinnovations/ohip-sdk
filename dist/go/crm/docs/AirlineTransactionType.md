# AirlineTransactionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**BatchId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**MembershipTransactionId** | Pointer to [**MembershipTransactionId**](MembershipTransactionId.md) |  | [optional] 
**HotelId** | Pointer to **string** | Property code that this record corresponds to | [optional] 
**AirlineHotelCode** | Pointer to **string** | Property code provided by the airline | [optional] 
**MemberInfo** | Pointer to [**MemberInfoType**](MemberInfoType.md) |  | [optional] 
**AirlineStatus** | Pointer to [**AirlineTransactionStatusType**](AirlineTransactionStatusType.md) |  | [optional] 
**ImportInfo** | Pointer to [**AirlineTransactionImportInfoType**](AirlineTransactionImportInfoType.md) |  | [optional] 
**Miles** | Pointer to **float32** | Miles earned through this membership transaction | [optional] 
**UserDefinedFields** | Pointer to [**UserDefinedFieldsType**](UserDefinedFieldsType.md) |  | [optional] 

## Methods

### NewAirlineTransactionType

`func NewAirlineTransactionType() *AirlineTransactionType`

NewAirlineTransactionType instantiates a new AirlineTransactionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAirlineTransactionTypeWithDefaults

`func NewAirlineTransactionTypeWithDefaults() *AirlineTransactionType`

NewAirlineTransactionTypeWithDefaults instantiates a new AirlineTransactionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionId

`func (o *AirlineTransactionType) GetTransactionId() UniqueIDType`

GetTransactionId returns the TransactionId field if non-nil, zero value otherwise.

### GetTransactionIdOk

`func (o *AirlineTransactionType) GetTransactionIdOk() (*UniqueIDType, bool)`

GetTransactionIdOk returns a tuple with the TransactionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionId

`func (o *AirlineTransactionType) SetTransactionId(v UniqueIDType)`

SetTransactionId sets TransactionId field to given value.

### HasTransactionId

`func (o *AirlineTransactionType) HasTransactionId() bool`

HasTransactionId returns a boolean if a field has been set.

### GetBatchId

`func (o *AirlineTransactionType) GetBatchId() UniqueIDType`

GetBatchId returns the BatchId field if non-nil, zero value otherwise.

### GetBatchIdOk

`func (o *AirlineTransactionType) GetBatchIdOk() (*UniqueIDType, bool)`

GetBatchIdOk returns a tuple with the BatchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchId

`func (o *AirlineTransactionType) SetBatchId(v UniqueIDType)`

SetBatchId sets BatchId field to given value.

### HasBatchId

`func (o *AirlineTransactionType) HasBatchId() bool`

HasBatchId returns a boolean if a field has been set.

### GetMembershipTransactionId

`func (o *AirlineTransactionType) GetMembershipTransactionId() MembershipTransactionId`

GetMembershipTransactionId returns the MembershipTransactionId field if non-nil, zero value otherwise.

### GetMembershipTransactionIdOk

`func (o *AirlineTransactionType) GetMembershipTransactionIdOk() (*MembershipTransactionId, bool)`

GetMembershipTransactionIdOk returns a tuple with the MembershipTransactionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipTransactionId

`func (o *AirlineTransactionType) SetMembershipTransactionId(v MembershipTransactionId)`

SetMembershipTransactionId sets MembershipTransactionId field to given value.

### HasMembershipTransactionId

`func (o *AirlineTransactionType) HasMembershipTransactionId() bool`

HasMembershipTransactionId returns a boolean if a field has been set.

### GetHotelId

`func (o *AirlineTransactionType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AirlineTransactionType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AirlineTransactionType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AirlineTransactionType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetAirlineHotelCode

`func (o *AirlineTransactionType) GetAirlineHotelCode() string`

GetAirlineHotelCode returns the AirlineHotelCode field if non-nil, zero value otherwise.

### GetAirlineHotelCodeOk

`func (o *AirlineTransactionType) GetAirlineHotelCodeOk() (*string, bool)`

GetAirlineHotelCodeOk returns a tuple with the AirlineHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAirlineHotelCode

`func (o *AirlineTransactionType) SetAirlineHotelCode(v string)`

SetAirlineHotelCode sets AirlineHotelCode field to given value.

### HasAirlineHotelCode

`func (o *AirlineTransactionType) HasAirlineHotelCode() bool`

HasAirlineHotelCode returns a boolean if a field has been set.

### GetMemberInfo

`func (o *AirlineTransactionType) GetMemberInfo() MemberInfoType`

GetMemberInfo returns the MemberInfo field if non-nil, zero value otherwise.

### GetMemberInfoOk

`func (o *AirlineTransactionType) GetMemberInfoOk() (*MemberInfoType, bool)`

GetMemberInfoOk returns a tuple with the MemberInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberInfo

`func (o *AirlineTransactionType) SetMemberInfo(v MemberInfoType)`

SetMemberInfo sets MemberInfo field to given value.

### HasMemberInfo

`func (o *AirlineTransactionType) HasMemberInfo() bool`

HasMemberInfo returns a boolean if a field has been set.

### GetAirlineStatus

`func (o *AirlineTransactionType) GetAirlineStatus() AirlineTransactionStatusType`

GetAirlineStatus returns the AirlineStatus field if non-nil, zero value otherwise.

### GetAirlineStatusOk

`func (o *AirlineTransactionType) GetAirlineStatusOk() (*AirlineTransactionStatusType, bool)`

GetAirlineStatusOk returns a tuple with the AirlineStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAirlineStatus

`func (o *AirlineTransactionType) SetAirlineStatus(v AirlineTransactionStatusType)`

SetAirlineStatus sets AirlineStatus field to given value.

### HasAirlineStatus

`func (o *AirlineTransactionType) HasAirlineStatus() bool`

HasAirlineStatus returns a boolean if a field has been set.

### GetImportInfo

`func (o *AirlineTransactionType) GetImportInfo() AirlineTransactionImportInfoType`

GetImportInfo returns the ImportInfo field if non-nil, zero value otherwise.

### GetImportInfoOk

`func (o *AirlineTransactionType) GetImportInfoOk() (*AirlineTransactionImportInfoType, bool)`

GetImportInfoOk returns a tuple with the ImportInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImportInfo

`func (o *AirlineTransactionType) SetImportInfo(v AirlineTransactionImportInfoType)`

SetImportInfo sets ImportInfo field to given value.

### HasImportInfo

`func (o *AirlineTransactionType) HasImportInfo() bool`

HasImportInfo returns a boolean if a field has been set.

### GetMiles

`func (o *AirlineTransactionType) GetMiles() float32`

GetMiles returns the Miles field if non-nil, zero value otherwise.

### GetMilesOk

`func (o *AirlineTransactionType) GetMilesOk() (*float32, bool)`

GetMilesOk returns a tuple with the Miles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMiles

`func (o *AirlineTransactionType) SetMiles(v float32)`

SetMiles sets Miles field to given value.

### HasMiles

`func (o *AirlineTransactionType) HasMiles() bool`

HasMiles returns a boolean if a field has been set.

### GetUserDefinedFields

`func (o *AirlineTransactionType) GetUserDefinedFields() UserDefinedFieldsType`

GetUserDefinedFields returns the UserDefinedFields field if non-nil, zero value otherwise.

### GetUserDefinedFieldsOk

`func (o *AirlineTransactionType) GetUserDefinedFieldsOk() (*UserDefinedFieldsType, bool)`

GetUserDefinedFieldsOk returns a tuple with the UserDefinedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFields

`func (o *AirlineTransactionType) SetUserDefinedFields(v UserDefinedFieldsType)`

SetUserDefinedFields sets UserDefinedFields field to given value.

### HasUserDefinedFields

`func (o *AirlineTransactionType) HasUserDefinedFields() bool`

HasUserDefinedFields returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


