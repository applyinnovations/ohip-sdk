# BulkPrepaidCardsStatusType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RecordNumber** | Pointer to **int32** | A unique identifying value assigned to the card. | [optional] 
**ResponseCode** | Pointer to **string** | Status of prepaid card. | [optional] 
**ResponseText** | Pointer to **string** | Status of prepaid card. | [optional] 

## Methods

### NewBulkPrepaidCardsStatusType

`func NewBulkPrepaidCardsStatusType() *BulkPrepaidCardsStatusType`

NewBulkPrepaidCardsStatusType instantiates a new BulkPrepaidCardsStatusType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkPrepaidCardsStatusTypeWithDefaults

`func NewBulkPrepaidCardsStatusTypeWithDefaults() *BulkPrepaidCardsStatusType`

NewBulkPrepaidCardsStatusTypeWithDefaults instantiates a new BulkPrepaidCardsStatusType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRecordNumber

`func (o *BulkPrepaidCardsStatusType) GetRecordNumber() int32`

GetRecordNumber returns the RecordNumber field if non-nil, zero value otherwise.

### GetRecordNumberOk

`func (o *BulkPrepaidCardsStatusType) GetRecordNumberOk() (*int32, bool)`

GetRecordNumberOk returns a tuple with the RecordNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordNumber

`func (o *BulkPrepaidCardsStatusType) SetRecordNumber(v int32)`

SetRecordNumber sets RecordNumber field to given value.

### HasRecordNumber

`func (o *BulkPrepaidCardsStatusType) HasRecordNumber() bool`

HasRecordNumber returns a boolean if a field has been set.

### GetResponseCode

`func (o *BulkPrepaidCardsStatusType) GetResponseCode() string`

GetResponseCode returns the ResponseCode field if non-nil, zero value otherwise.

### GetResponseCodeOk

`func (o *BulkPrepaidCardsStatusType) GetResponseCodeOk() (*string, bool)`

GetResponseCodeOk returns a tuple with the ResponseCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseCode

`func (o *BulkPrepaidCardsStatusType) SetResponseCode(v string)`

SetResponseCode sets ResponseCode field to given value.

### HasResponseCode

`func (o *BulkPrepaidCardsStatusType) HasResponseCode() bool`

HasResponseCode returns a boolean if a field has been set.

### GetResponseText

`func (o *BulkPrepaidCardsStatusType) GetResponseText() string`

GetResponseText returns the ResponseText field if non-nil, zero value otherwise.

### GetResponseTextOk

`func (o *BulkPrepaidCardsStatusType) GetResponseTextOk() (*string, bool)`

GetResponseTextOk returns a tuple with the ResponseText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseText

`func (o *BulkPrepaidCardsStatusType) SetResponseText(v string)`

SetResponseText sets ResponseText field to given value.

### HasResponseText

`func (o *BulkPrepaidCardsStatusType) HasResponseText() bool`

HasResponseText returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


