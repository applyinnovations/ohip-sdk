# ReservationPaymentMethodTypeEmailFolioInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | Pointer to [**EmailType**](EmailType.md) |  | [optional] 
**EmailFolio** | Pointer to **bool** |  | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID elementSpace. | [optional] 

## Methods

### NewReservationPaymentMethodTypeEmailFolioInfo

`func NewReservationPaymentMethodTypeEmailFolioInfo() *ReservationPaymentMethodTypeEmailFolioInfo`

NewReservationPaymentMethodTypeEmailFolioInfo instantiates a new ReservationPaymentMethodTypeEmailFolioInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationPaymentMethodTypeEmailFolioInfoWithDefaults

`func NewReservationPaymentMethodTypeEmailFolioInfoWithDefaults() *ReservationPaymentMethodTypeEmailFolioInfo`

NewReservationPaymentMethodTypeEmailFolioInfoWithDefaults instantiates a new ReservationPaymentMethodTypeEmailFolioInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *ReservationPaymentMethodTypeEmailFolioInfo) GetEmail() EmailType`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ReservationPaymentMethodTypeEmailFolioInfo) GetEmailOk() (*EmailType, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ReservationPaymentMethodTypeEmailFolioInfo) SetEmail(v EmailType)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *ReservationPaymentMethodTypeEmailFolioInfo) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetEmailFolio

`func (o *ReservationPaymentMethodTypeEmailFolioInfo) GetEmailFolio() bool`

GetEmailFolio returns the EmailFolio field if non-nil, zero value otherwise.

### GetEmailFolioOk

`func (o *ReservationPaymentMethodTypeEmailFolioInfo) GetEmailFolioOk() (*bool, bool)`

GetEmailFolioOk returns a tuple with the EmailFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailFolio

`func (o *ReservationPaymentMethodTypeEmailFolioInfo) SetEmailFolio(v bool)`

SetEmailFolio sets EmailFolio field to given value.

### HasEmailFolio

`func (o *ReservationPaymentMethodTypeEmailFolioInfo) HasEmailFolio() bool`

HasEmailFolio returns a boolean if a field has been set.

### GetId

`func (o *ReservationPaymentMethodTypeEmailFolioInfo) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ReservationPaymentMethodTypeEmailFolioInfo) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ReservationPaymentMethodTypeEmailFolioInfo) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ReservationPaymentMethodTypeEmailFolioInfo) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *ReservationPaymentMethodTypeEmailFolioInfo) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ReservationPaymentMethodTypeEmailFolioInfo) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ReservationPaymentMethodTypeEmailFolioInfo) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ReservationPaymentMethodTypeEmailFolioInfo) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


