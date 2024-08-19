# FulfillmentExportInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DeliveryStatus** | Pointer to [**ExportLogsDeliveryStatusType**](ExportLogsDeliveryStatusType.md) |  | [optional] 
**ExcludeExtract** | Pointer to **bool** | To exclude the extract record from membership exports. Once the membership export has run, this check box will be grayed out and the extract batch Id will be populated in the Extract Batch Id read-only field. | [optional] 
**ExtractBatchId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ExtractCode** | Pointer to **string** | ExtractCode of the membership fulfillment export logs. | [optional] 
**ExtractDate** | Pointer to **string** | ExtractDate of the membership fulfillment export logs. | [optional] 
**ExtractId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ExtractLogId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**MembershipCard** | Pointer to **string** | The card number for the guest membership. | [optional] 
**MembershipId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewFulfillmentExportInfoType

`func NewFulfillmentExportInfoType() *FulfillmentExportInfoType`

NewFulfillmentExportInfoType instantiates a new FulfillmentExportInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFulfillmentExportInfoTypeWithDefaults

`func NewFulfillmentExportInfoTypeWithDefaults() *FulfillmentExportInfoType`

NewFulfillmentExportInfoTypeWithDefaults instantiates a new FulfillmentExportInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDeliveryStatus

`func (o *FulfillmentExportInfoType) GetDeliveryStatus() ExportLogsDeliveryStatusType`

GetDeliveryStatus returns the DeliveryStatus field if non-nil, zero value otherwise.

### GetDeliveryStatusOk

`func (o *FulfillmentExportInfoType) GetDeliveryStatusOk() (*ExportLogsDeliveryStatusType, bool)`

GetDeliveryStatusOk returns a tuple with the DeliveryStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryStatus

`func (o *FulfillmentExportInfoType) SetDeliveryStatus(v ExportLogsDeliveryStatusType)`

SetDeliveryStatus sets DeliveryStatus field to given value.

### HasDeliveryStatus

`func (o *FulfillmentExportInfoType) HasDeliveryStatus() bool`

HasDeliveryStatus returns a boolean if a field has been set.

### GetExcludeExtract

`func (o *FulfillmentExportInfoType) GetExcludeExtract() bool`

GetExcludeExtract returns the ExcludeExtract field if non-nil, zero value otherwise.

### GetExcludeExtractOk

`func (o *FulfillmentExportInfoType) GetExcludeExtractOk() (*bool, bool)`

GetExcludeExtractOk returns a tuple with the ExcludeExtract field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeExtract

`func (o *FulfillmentExportInfoType) SetExcludeExtract(v bool)`

SetExcludeExtract sets ExcludeExtract field to given value.

### HasExcludeExtract

`func (o *FulfillmentExportInfoType) HasExcludeExtract() bool`

HasExcludeExtract returns a boolean if a field has been set.

### GetExtractBatchId

`func (o *FulfillmentExportInfoType) GetExtractBatchId() UniqueIDType`

GetExtractBatchId returns the ExtractBatchId field if non-nil, zero value otherwise.

### GetExtractBatchIdOk

`func (o *FulfillmentExportInfoType) GetExtractBatchIdOk() (*UniqueIDType, bool)`

GetExtractBatchIdOk returns a tuple with the ExtractBatchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtractBatchId

`func (o *FulfillmentExportInfoType) SetExtractBatchId(v UniqueIDType)`

SetExtractBatchId sets ExtractBatchId field to given value.

### HasExtractBatchId

`func (o *FulfillmentExportInfoType) HasExtractBatchId() bool`

HasExtractBatchId returns a boolean if a field has been set.

### GetExtractCode

`func (o *FulfillmentExportInfoType) GetExtractCode() string`

GetExtractCode returns the ExtractCode field if non-nil, zero value otherwise.

### GetExtractCodeOk

`func (o *FulfillmentExportInfoType) GetExtractCodeOk() (*string, bool)`

GetExtractCodeOk returns a tuple with the ExtractCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtractCode

`func (o *FulfillmentExportInfoType) SetExtractCode(v string)`

SetExtractCode sets ExtractCode field to given value.

### HasExtractCode

`func (o *FulfillmentExportInfoType) HasExtractCode() bool`

HasExtractCode returns a boolean if a field has been set.

### GetExtractDate

`func (o *FulfillmentExportInfoType) GetExtractDate() string`

GetExtractDate returns the ExtractDate field if non-nil, zero value otherwise.

### GetExtractDateOk

`func (o *FulfillmentExportInfoType) GetExtractDateOk() (*string, bool)`

GetExtractDateOk returns a tuple with the ExtractDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtractDate

`func (o *FulfillmentExportInfoType) SetExtractDate(v string)`

SetExtractDate sets ExtractDate field to given value.

### HasExtractDate

`func (o *FulfillmentExportInfoType) HasExtractDate() bool`

HasExtractDate returns a boolean if a field has been set.

### GetExtractId

`func (o *FulfillmentExportInfoType) GetExtractId() UniqueIDType`

GetExtractId returns the ExtractId field if non-nil, zero value otherwise.

### GetExtractIdOk

`func (o *FulfillmentExportInfoType) GetExtractIdOk() (*UniqueIDType, bool)`

GetExtractIdOk returns a tuple with the ExtractId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtractId

`func (o *FulfillmentExportInfoType) SetExtractId(v UniqueIDType)`

SetExtractId sets ExtractId field to given value.

### HasExtractId

`func (o *FulfillmentExportInfoType) HasExtractId() bool`

HasExtractId returns a boolean if a field has been set.

### GetExtractLogId

`func (o *FulfillmentExportInfoType) GetExtractLogId() UniqueIDType`

GetExtractLogId returns the ExtractLogId field if non-nil, zero value otherwise.

### GetExtractLogIdOk

`func (o *FulfillmentExportInfoType) GetExtractLogIdOk() (*UniqueIDType, bool)`

GetExtractLogIdOk returns a tuple with the ExtractLogId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtractLogId

`func (o *FulfillmentExportInfoType) SetExtractLogId(v UniqueIDType)`

SetExtractLogId sets ExtractLogId field to given value.

### HasExtractLogId

`func (o *FulfillmentExportInfoType) HasExtractLogId() bool`

HasExtractLogId returns a boolean if a field has been set.

### GetMembershipCard

`func (o *FulfillmentExportInfoType) GetMembershipCard() string`

GetMembershipCard returns the MembershipCard field if non-nil, zero value otherwise.

### GetMembershipCardOk

`func (o *FulfillmentExportInfoType) GetMembershipCardOk() (*string, bool)`

GetMembershipCardOk returns a tuple with the MembershipCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipCard

`func (o *FulfillmentExportInfoType) SetMembershipCard(v string)`

SetMembershipCard sets MembershipCard field to given value.

### HasMembershipCard

`func (o *FulfillmentExportInfoType) HasMembershipCard() bool`

HasMembershipCard returns a boolean if a field has been set.

### GetMembershipId

`func (o *FulfillmentExportInfoType) GetMembershipId() UniqueIDType`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *FulfillmentExportInfoType) GetMembershipIdOk() (*UniqueIDType, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *FulfillmentExportInfoType) SetMembershipId(v UniqueIDType)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *FulfillmentExportInfoType) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


